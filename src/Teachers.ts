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