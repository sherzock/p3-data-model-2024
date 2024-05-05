import { UpdateStudentInfo } from "../../src/Students";

const [_bun, _script, studentid, firstname, lastname, email] = process.argv;

const upStudent = await UpdateStudentInfo(Number(studentid), firstname, lastname, email);

console.log(
  `Updated Student, new information is: ${upStudent.firstName} ${upStudent.lastName}, ${upStudent.email}`
);
