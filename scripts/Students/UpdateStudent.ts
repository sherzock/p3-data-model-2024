import { UpdateStudentInfo } from "../../src/Students";

if (process.argv.length < 4) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, studentid, firstname, lastname, email] = process.argv;

const upStudent = await UpdateStudentInfo(Number(studentid), firstname, lastname, email);

console.log(
  `Updated Student, new information is: ${upStudent.firstName} ${upStudent.lastName}, ${upStudent.email}`
);
