import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div className="rounded-0 border-0 list-group" id="wd-courses-navigation">
      <Link className="list-group-item active" href="/Courses/1234/Home">
        Home
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Modules"
      >
        Modules
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Piazza"
      >
        Piazza
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Zoom"
      >
        Zoom
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Assignments"
      >
        Assignments
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Quizzes"
      >
        Quizzes
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/Grades"
      >
        Grades
      </Link>
      <Link
        className="list-group-item text-danger border-0"
        href="/Courses/1234/People/Table"
      >
        People
      </Link>
    </div>
  );
}
