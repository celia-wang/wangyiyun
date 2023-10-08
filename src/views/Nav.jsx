/**导航条 */
import React, { useEffect, useState } from "react";
import { NavData } from "../AxiosData/AxiosData";
import { Swiper } from "antd-mobile";

export default function Nav() {
  let [list, setList] = useState([]);
  useEffect(() => {
    NavData()
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log("ERROR:导航条数据请求失败...");
      });
  }, []);
  const items = list.map((item, index) => {
    return (
      <Swiper.Item key={index}>
        <li
          key={item.id}
          className="h-[100%]   flex flex-col justify-around  items-center text-[3.5vw] mr-6 "
        >
          <div className="  w-[13vw] h-[13vw]">
            <img
              className=" red-image  w-[13vw] h-[13vw]"
              src={item.iconUrl}
              alt=""
            />
          </div>
          <span className=" block text-[3vw]">{item.name}</span>
        </li>
      </Swiper.Item>
    );
  });

  return (
    <div className="h-[20vw]  pl-[6vw] ">
      <Swiper slideSize={23} trackOffset={10} indicator={() => null}>
        {items}
      </Swiper>
    </div>
  );
}
