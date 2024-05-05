import { DeleteCourse } from "../../src/Courses";

const [_bun, _script, idcourse] = process.argv;

const deletecourse = await DeleteCourse(Number(idcourse));

console.log(
  `Course with id: ${deletecourse.idcourse} was deleted`
);
