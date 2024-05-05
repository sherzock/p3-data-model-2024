import { FindStudent } from "../../src/Students";
  
  const [_bun, _script, studentid] = process.argv;
  
  const student = await FindStudent(Number(studentid));
  
  if(student!== null)
      {
          console.log(
              `Student info: first name:${student.firstName} last name:${student.lastName}, email:${student.email}`
            );
      }