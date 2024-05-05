import { CreateStudent, EnrrollStudent } from "../../src/Students";

if (process.argv.length < 2) {
  console.error(`Too many Arguments`);
  process.exit(1);
}

const [_bun, _script, studentid, courseid] = process.argv;

const newEnrrollment = await EnrrollStudent(Number(studentid), Number(courseid));

console.log(
  `New Enrrollment was made: Student id:${newEnrrollment.studentId} Course id:${newEnrrollment.courseId}`
);