import { db } from "./db";

export const CreateClassroom = async( name: string, capacity: number, location: string, url: string) => {

    try{
        const classroom = await db.classroom.create({
            data:{
                name,
                capacity,
                location,
                url,
            },
        });
        return classroom;
    }
    catch(e){
        return "Error: Could not create new classroom";
    }

};

export const UpdateClassroomInfo = async(classroomId: number, name: string, capacity: number, location: string, url: string) => {
    try{
        const classroom = await db.classroom.update({
            where:{ idClassroom: classroomId},
            data:{
                name,
                capacity,
                location,
                url,
            },
        });
        return classroom;
    }
    catch(e){
        return "Error: Could not Update classroom info";
    }
}

export const DeleteClassroom = async( classroomId: number) => {

    try{
        const classroom = await db.classroom.delete({
            where:{
                idClassroom: classroomId,
            },
        });
        return classroom;
    }
    catch(e){
        return "Error: Could not delete the classroom";
    }

};