import { ListClassrooms } from "../../src/Classrooms";

  const classrooms = await ListClassrooms();
  
  for(let i=0; i< classrooms.length; i++){
    console.log(
        `Classroom info: Name:${classrooms[i].name} Capacity:${classrooms[i].capacity}, Location:${classrooms[i].location}, Url:${classrooms[i].url}`
      );
  }