import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home">
      <div className="d-flex">
        <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
