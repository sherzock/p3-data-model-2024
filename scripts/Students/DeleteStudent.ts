import { DeleteStudent } from "../../src/Students";
  
  const [_bun, _script, studentid] = process.argv;
  
  const student = await DeleteStudent(Number(studentid));
  
  console.log(
    `Student was deleted: ${student.studentid}`
  );