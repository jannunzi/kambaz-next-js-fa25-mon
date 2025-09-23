import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/1234/Home">Home</Link>
      <br />
      <Link href="/Courses/1234/Modules">Modules</Link>
      <br />
      <Link href="/Courses/1234/Piazza">Piazza</Link>
      <br />
      <Link href="/Courses/1234/Zoom">Zoom</Link>
      <br />
      <Link href="/Courses/1234/Assignments">Assignments</Link>
      <br />
      <Link href="/Courses/1234/Quizzes">Quizzes</Link>
      <br />
      <Link href="/Courses/1234/Grades">Grades</Link>
      <br />
      <Link href="/Courses/1234/People/Table">People</Link>
      <br />
    </div>
  );
}
