import React from "react";

export default function Positions() {
  return (
    <div>
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="">
          <div className="wd-bg-color-gray wd-pos-relative">
            <div
              className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait"
            >
              Portrait
            </div>
            <div
              className="wd-pos-absolute-50-50  wd-zindex-bring-to-front
         wd-bg-color-blue wd-fg-color-white 
         wd-dimension-landscape"
            >
              Landscape
            </div>
            <div
              className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square"
            >
              Square
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div
            className="wd-bg-color-yellow 
                    wd-dimension-portrait"
          >
            <div className="wd-pos-relative-nudge-down-right wd-bg-color-green wd-fg-color-white">
              Portrait
            </div>
          </div>
          <div
            className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape"
          >
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>
    </div>
  );
}
