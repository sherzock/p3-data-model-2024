import { CreateTeacher } from "../../src/Teachers";

const [_bun, _script, firstname, lastname, email] = process.argv;

const newTeacher = await CreateTeacher(firstname, lastname, email);

console.log(
  `New Teacher was created: ${newTeacher.firstName} ${newTeacher.lastName}, ${newTeacher.email}`
);
