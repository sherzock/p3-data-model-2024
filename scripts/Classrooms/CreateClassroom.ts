import { CreateClassroom } from "../../src/Classrooms";

if (process.argv.length < 3) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, name, capacity, location, url] = process.argv;

const newClassroom = await CreateClassroom(name, Number(capacity), location, url);

console.log(
  `New Classroom was created: Name: ${newClassroom.name}, Capacity: ${newClassroom.capacity}, Location:${newClassroom.location}, url:${newClassroom.url}`
);
