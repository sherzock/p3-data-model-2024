import { UpdateCourseInfo } from "../../src/Courses";

if (process.argv.length < 6) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, courseid, name, code, description, teacherid, classroomid] = process.argv;

const upCourse = await UpdateCourseInfo(Number(courseid), name, code, description, Number(teacherid), Number(classroomid));

console.log(
  `Updated Course, new information is: Name: ${upCourse.name}, code: ${upCourse.code}, description:${upCourse.description}, teacher:${teacherid}, classroom:${classroomid}`
);
