import { UpdateClassroomInfo } from "../../src/Classrooms";

if (process.argv.length < 5) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, classroomid, name, capacity, location, url] = process.argv;

const upClassroom = await UpdateClassroomInfo(Number(classroomid), name, Number(classroomid), location, url);

console.log(
  `Updated Classroom, new information is: name:${upClassroom.name}, capacity:${upClassroom.capacity}, location:${upClassroom.location}, url:${upClassroom.url}`
);
