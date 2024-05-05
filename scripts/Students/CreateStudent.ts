import { CreateStudent } from "../../src/Students";

const [_bun, _script, firstname, lastname, email] = process.argv;

const newStudent = await CreateStudent(firstname, lastname, email);

console.log(
  `New Student was created: ${newStudent.firstName} ${newStudent.lastName}, ${newStudent.email}`
);
