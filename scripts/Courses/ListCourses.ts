import { ListCourses } from "../../src/Courses";

const courses = await ListCourses();
  
for(let i=0; i< courses.length; i++){
  console.log(
      `Course info: Name:${courses[i].name} code:${courses[i].code}, description:${courses[i].description}, teacher id:${courses[i].teacherId}, classroom id: ${courses[i].classromId}`
    );
}