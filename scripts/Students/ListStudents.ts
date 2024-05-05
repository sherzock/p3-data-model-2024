import { ListStudents } from "../../src/Students";

const students = await ListStudents();
  
for(let i=0; i< students.length; i++){
  console.log(
      `Student info: first name:${students[i].firstName} last name:${students[i].lastName}, email:${students[i].email}`
    );
}