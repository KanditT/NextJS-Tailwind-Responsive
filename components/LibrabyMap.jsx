import React from "react";
import Img1 from "../public/md-thai-emblem_300x300.png";
import Img2 from "../public/AGKKU.png";
import Img3 from "../public/AMSKKU.png";
import Img4 from "../public/ARCH_KKU_Logo.png";
import Img5 from "../public/DENTISTRY_KKU.png";
import Img6 from "../public/EDU_KKU_Symbo.png";
import Img7 from "../public/Nursing_KKU_Thai_Symbol.png";
import Img8 from "../public/Pharmaceutical_Science_KKU.png";
import Img9 from "../public/Public_Heaalth_KKU.png";
import Img10 from "../public/VET_KKU_LOGO.svg.png";
import Img11 from "../public/MBA.png";
import Img12 from "../public/COLA_KKU_Symbol.png";
import Img13 from "../public/FIS_KKU_Symbol.png";
import LibrabyImg from "./LibrabyImg";

const LibrabyMap = () => {
  return (
    <div id="kud" className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Let see other Library</p>
      <p className="pb-4">GOGO!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <a href="https://www.google.com/maps?ll=16.469542,102.830309&z=16&t=m&hl=th&gl=TH&mapclient=embed&cid=3251952549610997991">
          <LibrabyImg socialImg={Img1} />
        </a>

        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img2} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img3} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img4} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img5} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img6} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          <LibrabyImg socialImg={Img7} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img8} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img9} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img10} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img11} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img12} />
        </a>
        <a href="https://goo.gl/maps/vzsHJWAEDerWnBGp6">
          {" "}
          <LibrabyImg socialImg={Img13} />
        </a>
      </div>
    </div>
  );
};

export default LibrabyMap;
