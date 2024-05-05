import { UpdateClassroomInfo } from "../../src/Classrooms";

const [_bun, _script, classroomid, name, capacity, location, url] = process.argv;

const upClassroom = await UpdateClassroomInfo(Number(classroomid), name, Number(capacity), location, url);

console.log(
  `Updated Classroom, new information is: name:${upClassroom.name}, capacity:${upClassroom.capacity}, location:${upClassroom.location}, url:${upClassroom.url}`
);
