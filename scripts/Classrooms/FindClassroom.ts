import { FindClassroom } from "../../src/Classrooms";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, classroomid] = process.argv;

const classroom = await FindClassroom(Number(classroomid));

console.log(
  `Classroom info: Name:${classroom.name} Capacity:${classroom.capacity}, Location:${classroom.location}, Url:${classroom.url}`
);