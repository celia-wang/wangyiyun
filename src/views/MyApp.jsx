import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Popup } from "antd-mobile";
import Banner from "./Banner.jsx";
import Nav from "./Nav";
import PlayList from "./PlayList";
import CD from "./CD";
import NewSongList from "./NewSongList";
import HotTopic from "./HotTopic";
import Calendar from "./Calendar";

import { NavLink } from "react-router-dom";

export default function MyApp() {
  const [visible, setVisible] = useState(false);
  // function maskFun() {
  //   return (
  //     <>
  //       <Button onClick={() => setVisible(true)}>显示背景蒙层</Button>

  //     </>
  //   );
  // }
  return (
    <>
      {/* 首页 */}
      <div className="bg-[#f4f4f4] w-[100%] h-[100%]">
        {/* 头部 */}
        <div className=" w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center  ">
          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
            position="left"
            bodyStyle={{ width: "80vw" }}
          >
            内容
          </Popup>
          <div onClick={() => setVisible(true)}>
            <Icon className=" w-7 h-7" icon="material-symbols:menu" />
          </div>

          <NavLink key="/Search" to="/Search">
            {/* <SearchBar style={{background: 'linear-gradient(58.2deg, rgba(171, 53, 163, 0.3) 30.3%, rgba(255, 204, 112, 0.27) 97.7%)'}} className=" inline-block w-[75vw] h-[10vw] rounded-[10px]  text-[#8189A1] " placeholder='请输入内容' /> */}
            <div className="relative">
              <Icon
                icon="basil:search-outline"
                width="16.75px"
                className="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1]"
              />
              <input
                type="text"
                placeholder="Love Is Gone (Acoustic)"
                className=" text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
              />
              <Icon
                icon="fluent:scan-dash-48-regular"
                width="16.75px"
                className="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1]"
              />
            </div>
          </NavLink>
          <Icon className="w-7 h-7 " icon="ph:microphone" />
        </div>
        <Banner /> {/* 轮播图 */}
        <Nav /> {/* 导航条 */}
        <PlayList /> {/* 推荐歌单 */}
        <CD /> {/* 数字专辑 */}
        <NewSongList /> {/* 排行榜 */}
        <HotTopic /> {/* 热门话题 */}
        <Calendar /> {/* 音乐日历 */}
        <div className="w-[100%] h-[12vw]"></div>
      </div>
    </>
  );
}
