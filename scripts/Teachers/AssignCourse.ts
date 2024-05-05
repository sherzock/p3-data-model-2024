import { AssignCourse } from "../../src/Teachers";

const [_bun, _script, teacherid, courseid] = process.argv;

const course = await AssignCourse(Number(teacherid), Number(courseid));

console.log(
    `New Teacher: ${course.teacherId} was assigned to course: ${course.idCourse}`
);
