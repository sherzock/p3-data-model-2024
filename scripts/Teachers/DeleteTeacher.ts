import { DeleteTeacher } from "../../src/Teachers";

  const [_bun, _script, teacherid] = process.argv;
  
  const newTeacher = await DeleteTeacher(Number(teacherid));
  
  console.log(
    `Teacher was deleted: ${newTeacher.teacherid}`
  );