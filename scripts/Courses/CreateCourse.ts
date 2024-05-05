import { CreateCourse } from "../../src/Courses";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, name, code, description, teacherid, classroomid] = process.argv;

const newCourse = await CreateCourse(name, code, description, Number(teacherid), Number(classroomid));

console.log(
  `New Course was created: Name: ${newCourse.name}, code: ${newCourse.code}, description:${newCourse.description}, teacher:${teacherid}, classroom:${classroomid}`
);
