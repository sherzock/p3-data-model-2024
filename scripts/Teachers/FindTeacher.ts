import { FindTeacher } from "../../src/Teachers";
  
  const [_bun, _script, teacherid] = process.argv;
  
  const teacher = await FindTeacher(Number(teacherid));
  
  if(teacher!== null)
      {
          console.log(
              `Teacher info: first name:${teacher.firstName} last name:${teacher.lastName}, email:${teacher.email}`
            );
      }