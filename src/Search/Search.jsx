import React, { useEffect, useState } from "react";
import { Input } from 'antd-mobile'
import { TabBar } from 'antd-mobile'
import { LeftOutline, TeamFill, ShopbagOutline, CollectMoneyOutline, AudioFill } from 'antd-mobile-icons'
import { Swiper } from "antd-mobile";
import Singer from "./Singer";
import ListNew from "./ListNew";
import { NavLink } from "react-router-dom";

export default function Search() {
  const items = ListNew()
  return <div className="bg-[#F4F4F4] h-[100%] w-[100%] pb-[12vw]">
    <div className="w-[91vw] h-[20vw] mx-auto flex justify-between items-center" >
      <NavLink to="/App">
      <span>
        <TabBar>
          <TabBar.Item key="" icon={<LeftOutline style={{ color: "black" }} />} />
        </TabBar>
      </span>
      </NavLink>
      <div className="relative">
        <span></span>
        <Input
          style={{ backgroundColor: "white", borderRadius: "10px", width: "70vw", fontSize: "3.7vw", paddingLeft: "2vw" }}
          placeholder='请输入内容'
 
        />
      </div>
      <div style={{ fontWeight: "600", fontSize: "3.7vw" }}>搜索</div>
    </div>
    <div>
      <TabBar className="type" >
        <TabBar.Item key="" title="歌手" icon={<TeamFill style={{ color: "red" }} />} style={{ color: "black", fontWeight: "800", fontSize: "3.4vw" }} />
        <TabBar.Item key="" title="曲风" icon={<ShopbagOutline style={{ color: "red" }} />} style={{ color: "black", fontWeight: "800", fontSize: "3.4vw" }} />
        <TabBar.Item key="" title="专区" icon={<CollectMoneyOutline style={{ color: "red" }} />} style={{ color: "black", fontWeight: "800", fontSize: "3.4vw" }} />
        <TabBar.Item key="" title="识曲" icon={<AudioFill style={{ color: "red" }} />} style={{ color: "black", fontWeight: "800", fontSize: "3.4vw" }} />
      </TabBar>
    </div>
    <div className="px-3 py-4" >
      <h1 className="flex justify-between items-center  font-semibold text-[4vw] text-[#283349] "><span>猜你喜欢</span><span></span>
      </h1>
    </div>
    <Singer /> 
    {/* <ListNew /> */}
    
    <Swiper slideSize={70} indicator={() => null}>
    {items}
    </Swiper>

  </div>
}

