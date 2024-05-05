import { AssignCourse } from "../../src/Teachers";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, teacherid, courseid] = process.argv;

const course = await AssignCourse(Number(teacherid), Number(courseid));

console.log(
    `New Teacher: ${course.teacherId} was assigned to course: ${course.idCourse}`
);
