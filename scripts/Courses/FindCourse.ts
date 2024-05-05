import { FindCourse } from "../../src/Courses";

const [_bun, _script, courseid] = process.argv;

const course = await FindCourse(Number(courseid));

if(course!== null)
    {
        console.log(
            `course info: Name:${course.name} code:${course.code}, description:${course.description}, teacher id:${course.teacherId}, classroom id: ${course.classromId}`
          );
    }