import { DeleteClassroom } from "../../src/Classrooms";

if (process.argv.length < 1) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, idclassroom] = process.argv;

const deleteclassroom = await DeleteClassroom(Number(idclassroom));

console.log(
  `Classroom with id: ${deleteclassroom.classromId} was deleted`
);
