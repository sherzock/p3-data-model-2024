import { ListTeachers } from "../../src/Teachers";

const teachers = await ListTeachers();
  
for(let i=0; i< teachers.length; i++){
  console.log(
      `Teacher info: first name:${teachers[i].firstName} last name:${teachers[i].lastName}, email:${teachers[i].email}`
    );
}