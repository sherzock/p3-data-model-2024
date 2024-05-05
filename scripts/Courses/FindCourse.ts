import { FindCourse } from "../../src/Courses";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, courseid] = process.argv;

const course = await FindCourse(Number(courseid));

if(course!== null)
    {
        console.log(
            `course info: Name:${course.name} code:${course.code}, description:${course.description}, teacher id:${course.teacherId}, classroom id: ${course.classromId}`
          );
    }