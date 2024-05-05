import { db } from "./db";

export const CreateStudent = async( firstName: string, lastName: string, email: string) => {

    try{
        const student = await db.student.create({
            data:{
                firstName,
                lastName,
                email,
            },
        });
        return student;
    }
    catch(e){
        return "Error: Could not create new student";
    }

};

export const EnrrollStudent = async(studentid: number, courseid: number) => {
    try {
        const enrrollment = await db.enrollment.create({
            data:{
               courseId: courseid,
               studentId: studentid,
            },
        });
        return enrrollment;
    }
    catch(e){
        return "Error: Could not enrroll student";
    }
};

export const UpdateStudentInfo = async(studentId: number, firstName: string, lastName: string, email: string) => {
    try{
        const student = await db.student.update({
            where:{ idPerson: studentId},
            data:{
                firstName: firstName,
                lastName: lastName,
                email: email,
            }
        });
        return student;
    }
    catch(e){
        return "Error: Could not update student info";
    }
}

export const DeleteStudent = async( studentid: number) => {

    try{
        const student = await db.student.delete({
            where:{
                idPerson: studentid
            },
        });
        return student;
    }
    catch(e){
        return "Error: Could not delete student";
    }

};

export const FindStudent = async(studentId: number) => {
    try{
        const student = await db.student.findFirst({
            where:{ idPerson: studentId},
        });
        return student;
    }
    catch(e){
        return "Error: Could not find student";
    }
}

export const ListStudents = async() => {
    try{
        const students = await db.student.findMany();
        return students;
    }
    catch(e){
        return "Error: Could not find students";
    }
}