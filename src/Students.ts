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
    }
    catch(e){
        return "Error: Unable to Enrroll the Student"
    }
};