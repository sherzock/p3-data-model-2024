import { db } from "./db";

export const CreateTeacher = async( firstName: string, lastName: string, email: string) => {

    try{
        const teacher = await db.teacher.create({
            data:{
                firstName,
                lastName,
                email,
            },
        });
        return teacher;
    }
    catch(e){
        return "Error: Could not create new teacher";
    }

};

export const UpdateTeacherInfo = async(teacherId: number, firstName: string, lastName: string, email: string) => {
    try{
        const teacher = await db.teacher.update({
            where:{ idPerson: teacherId},
            data:{
                firstName: firstName,
                lastName: lastName,
                email: email,
            }
        });
        return teacher;
    }
    catch(e){
        return "Error: Could not Update teacher info";
    }
}

export const GradeStudentAssignment = async(studentid: number, courseid: number, gradenum: number, name: string) => {
    try{
        const enrrollment = await db.enrollment.findFirst({
            where:{ 
                studentId: studentid,
                courseId: courseid,
            },
        });
        const newgrade = await db.grade.create({
            data:{
                name: name,
                grade: gradenum,
                enrollmentId: enrrollment?.idEnrollment,
            }
        });
        return newgrade;
    }
    catch(e){
        return "Error: Could not Grade this assignment";
    }
}

export const DeleteTeacher = async( teacherid: number) => {

    try{
        const teacher = await db.teacher.delete({
            where:{
               idPerson: teacherid,
            },
        });
        return teacher;
    }
    catch(e){
        return "Error: Could not delete teacher";
    }

};

export const FindTeacher = async(teacherId: number) => {
    try{
        const teacher = await db.teacher.findFirst({
            where:{ idPerson: teacherId},
        });
        return teacher;
    }
    catch(e){
        return "Error: Could not find teacher";
    }
}

export const ListTeachers = async() => {
    try{
        const teacher = await db.teacher.findMany();
        return teacher;
    }
    catch(e){
        return "Error: Could not find teachers";
    }
}