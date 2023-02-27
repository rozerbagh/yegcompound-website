import React from "react";
export default function MapFrame() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width={770}
          height={510}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=6610 132 Ave NW, Edmonton, AB T5C 2A5, Canada&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="yes"
          marginHeight={0}
          marginWidth={0}
        />
        <a href="https://2yu.co">2yu</a>
        <br />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".mapouter{position:relative;text-align:right;height:510px;width:770px;}",
          }}
        />
        <a href="https://embedgooglemap.2yu.co">html embed google map</a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}",
          }}
        />
      </div>
    </div>
  );
}
