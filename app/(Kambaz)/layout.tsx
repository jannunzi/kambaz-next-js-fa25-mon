import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex" id="wd-kambaz">
      <div className="d-none d-md-block">
        <KambazNavigation />
      </div>
      <div className="flex-fill wd-main-content-offset ms-3">{children}</div>
    </div>
  );
}
