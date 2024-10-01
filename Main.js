import React, { useRef, useState } from "react";
import { WindowsSVG, VsCode, Chrome, Folder } from "./svg";
import Folders from "./comps/Folders";
import About from "./comps/About";
// import ChromeFrame from "./comps/ChromeFrame";
import Weather from "./comps/Weather/Weather";
import NewsSVG from "./svg/NewsSVG";
import News from "./comps/News/News";
import WeatherSVG from "./svg/WeatherSVG";
import WindowTab from "./comps/WindowTab";
import { AnimatePresence } from "framer-motion";
const Main = () => {
  const dragComp = useRef();
  const [tab, showTab] = useState(false);
  return (
    <div
      className="h-screen w-screen flex"
      ref={dragComp}
    >
      <div className="flex flex-col flex-wrap gap-4 h-full py-1 px-2">
        <div>
          <Folders
            icon={<Folder />}
            tab={<About />}
            descr={"About Me"}
            dragComp={dragComp}
          />
          <span className="text-gray-400 text-sm">About</span>
        </div>
        <div>
          <Folders
            icon={<NewsSVG />}
            tab={<News />}
            descr={"News"}
            dragComp={dragComp}
          />
          <span className="text-gray-400 text-sm">News</span>
        </div>
        <div>
          <Folders
            icon={<WeatherSVG />}
            tab={<Weather />}
            descr={"Weather"}
            dragComp={dragComp}
          />{" "}
          <span className="text-gray-400 text-sm">Weather</span>
        </div>
      </div>
      <div className="absolute backdrop-blur-[80px] py-1 gap-2 flex justify-center items-center text-white bottom-0 w-screen bg-black/50 border-t border-gray-600">
        <div className="transition-all duration-100 rounded-sm hover:bg-white/10 cursor-pointer overflow-hidden">
          <div onClick={() =>showTab(!tab)}>
            <WindowsSVG />
          </div>
          <AnimatePresence>{tab && <WindowTab/>}</AnimatePresence>
        </div>
        <div>
          <input
            type="search"
            name="searchW"
            placeholder="Search"
            className="bg-slate-500/40 hover:brightness-125 outline-none text-center text-sm py-1 w-24 rounded-full focus:w-40 transition-all duration-500 focus:outline-1 focus:outline-slate-500"
          />
        </div>
        <div className="transition-all duration-100 rounded-sm hover:bg-white/10 cursor-pointer">
          <VsCode />
        </div>
        <div className="transition-all duration-100 rounded-sm hover:bg-white/10 cursor-pointer">
          <Chrome />
        </div>
        <div className="transition-all duration-100 hover:bg-white/10 cursor-pointer absolute right-3 text-lg py-1 inline-flex justify-center items-center gap-1 px-2 rounded-lg">
          <span>🛜</span>
          <span>🔉</span>
          <span>🔋</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
