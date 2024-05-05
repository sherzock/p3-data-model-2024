import { FindStudent } from "../../src/Students";

if (process.argv.length < 3) {
    console.error(`Too many Arguments`);
    process.exit(1);
  }
  
  const [_bun, _script, studentid] = process.argv;
  
  const student = await FindStudent(Number(studentid));
  
  if(student!== null)
      {
          console.log(
              `Student info: first name:${student.firstName} last name:${student.lastName}, email:${student.email}`
            );
      }