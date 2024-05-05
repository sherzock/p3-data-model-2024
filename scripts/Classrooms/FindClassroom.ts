import { FindClassroom } from "../../src/Classrooms";

const [_bun, _script, classroomid] = process.argv;

const classroom = await FindClassroom(Number(classroomid));

console.log(
  `Classroom info: Name:${classroom.name} Capacity:${classroom.capacity}, Location:${classroom.location}, Url:${classroom.url}`
);