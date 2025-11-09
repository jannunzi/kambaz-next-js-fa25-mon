"use client";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

function Lab5() {
  return (
    <div>
      <h1>Lab 5</h1>
      <WorkingWithObjectsAsynchronously />
      <HttpClient />
      <a href={`${HTTP_SERVER}/lab5/welcome`}>Welcome</a>
      <EnvironmentVariables />
    </div>
  );
}
export default Lab5;
