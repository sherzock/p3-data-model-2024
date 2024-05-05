import { CreateClassroom } from "../../src/Classrooms";

const [_bun, _script, name, capacity, location, url] = process.argv;

const newClassroom = await CreateClassroom(name, Number(capacity), location, url);

console.log(
  `New Classroom was created: Name: ${newClassroom.name}, Capacity: ${newClassroom.capacity}, Location:${newClassroom.location}, url:${newClassroom.url}`
);
