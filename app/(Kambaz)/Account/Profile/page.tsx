import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" />
      <br />
      <input defaultValue="123" placeholder="password" type="password" />
      <br />
      <input defaultValue="Alice" placeholder="First Name" />
      <br />
      <input defaultValue="Wonderland" placeholder="Last Name" />
      <br />
      <input defaultValue="2000-01-01" type="date" />
      <br />
      <input defaultValue="alice@wonderland" type="email" />
      <br />
      <select defaultValue="FACULTY">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}
