import { CreateStudent } from "../../src/Students";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, firstname, lastname, email] = process.argv;

const newStudent = await CreateStudent(firstname, lastname, email);

console.log(
  `New Student was created: ${newStudent.firstName} ${newStudent.lastName}, ${newStudent.email}`
);
