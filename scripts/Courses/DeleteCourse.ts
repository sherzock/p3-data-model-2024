import { DeleteCourse } from "../../src/Courses";

if (process.argv.length < 1) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, idcourse] = process.argv;

const deletecourse = await DeleteCourse(Number(idcourse));

console.log(
  `Course with id: ${deletecourse.idcourse} was deleted`
);
