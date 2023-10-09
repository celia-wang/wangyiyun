/** 导航条 */
import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import { NavData } from '../AxiosData/AxiosData';

export default function Nav() {
  const [list, setList] = useState([]);
  useEffect(() => {
    NavData()
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(`导航条数据请求失败:${err}`);
      });
  }, []);
  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.id}>
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
