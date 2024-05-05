import { DeleteClassroom } from "../../src/Classrooms";

const [_bun, _script, idclassroom] = process.argv;

const deleteclassroom = await DeleteClassroom(Number(idclassroom));

console.log(
  `Classroom with id: ${deleteclassroom.classromId} was deleted`
);
