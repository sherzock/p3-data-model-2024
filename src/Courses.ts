import { db } from "./db";

export const CreateCourse= async( name: string, code: string, description: string, teacherid: number, classroomid: number) => {

    try{
        const course = await db.course.create({
            data:{
                name,
                code,
                description,
                teacherId: teacherid,
                classromId: classroomid,
            },
        });
        return course;
    }
    catch(e){
        return "Error: Could not create new course";
    }

};

export const UpdateCourseInfo = async(courseid: number,name: string, abbreviation: string, description: string, teacherid: number, classroomid: number) => {
    try{
        const course = await db.course.update({
            where:{ idCourse: courseid},
            data:{
                name,
                code: abbreviation,
                description,
                teacherId: teacherid,
                classromId: classroomid,
            },
        });
        return course;
    }
    catch(e){
        return "Error: Could not Update course info";
    }
}

export const DeleteCourse = async( courseid: number) => {

    try{
        const course = await db.course.delete({
            where:{
                idCourse: courseid,
            },
        });
        return course;
    }
    catch(e){
        return "Error: Could not delete the course";
    }

};

export const FindCourse = async(courseid: number) => {
    try{
        const course = await db.course.findFirst({
            where:{ idCourse: courseid},
        });
        return course;
    }
    catch(e){
        return "Error: Could not Find course";
    }
}

export const ListCourses = async() => {
    try{
        const course = await db.course.findMany();
        return course;
    }
    catch(e){
        return "Error: Could not Find courses";
    }
}