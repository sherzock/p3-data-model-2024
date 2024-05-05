import { GradeStudentAssignment } from "../../src/Teachers";

if (process.argv.length < 4) {
    console.error(`Too many Arguments`);
    process.exit(1);
  }
  
  const [_bun, _script, studentid, courseid, gradenum, name] = process.argv;
  
  const newgrade = await GradeStudentAssignment(Number(studentid), Number(courseid), Number(gradenum), name);
  
  console.log(
    `Graded student: ${studentid}, On assignment: ${newgrade.name}, with a calification of ${newgrade.grade}`
  );
  