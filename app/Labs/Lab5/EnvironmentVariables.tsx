"use client";
export default function EnvironmentVariables() {
  console.log("Direct access:", process.env.NEXT_PUBLIC_HTTP_SERVER);
  console.log("Built-in NODE_ENV:", process.env.NODE_ENV);
  console.log("Test var:", process.env.NEXT_PUBLIC_TEST); // <-- Add this line here

  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  console.log("Via const:", HTTP_SERVER);

  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {HTTP_SERVER}</p>
      <hr />
    </div>
  );
}
