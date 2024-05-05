import { DeleteStudent } from "../../src/Students";

if (process.argv.length < 1) {
    console.error(`Too many Arguments`);
    process.exit(1);
  }
  
  const [_bun, _script, studentid] = process.argv;
  
  const student = await DeleteStudent(Number(studentid));
  
  console.log(
    `Student was deleted: ${student.studentid}`
  );