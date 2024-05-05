import { UpdateTeacherInfo } from "../../src/Teachers";

const [_bun, _script, teacherid, firstname, lastname, email] = process.argv;

const upTeacher = await UpdateTeacherInfo(Number(teacherid), firstname, lastname, email);

console.log(
  `Updated Teacher, new information is: ${upTeacher.firstName} ${upTeacher.lastName}, ${upTeacher.email}`
);
