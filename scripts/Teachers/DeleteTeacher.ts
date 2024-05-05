import { DeleteTeacher } from "../../src/Teachers";

if (process.argv.length < 2) {
    console.error(`Too many Arguments`);
    process.exit(1);
  }
  
  const [_bun, _script, teacherid] = process.argv;
  
  const newTeacher = await DeleteTeacher(Number(teacherid));
  
  console.log(
    `Teacher was deleted: ${newTeacher.teacherid}`
  );