import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div>
      <a href="https://www.northeastern.edu/" target="_blank">
        {" "}
        Northeastern
      </a>
      <br />
      <Link href="/Account"> Account</Link>
      <br />
      <Link href="/Dashboard"> Dashboard</Link>
      <br />
      <Link href="/Dashboard"> Courses</Link>
      <br />
      <Link href="/Calendar"> Calendar</Link>
      <br />
      <Link href="/Inbox"> Inbox</Link>
      <br />
      <Link href="/Labs"> Labs</Link>
      <br />
    </div>
  );
}
