import React, { useState, useRef } from "react";
import China from "./China";
import HKT from "./HKT";
import West from "./West";
import Korea from "./Korea";
import Jepan from "./Japan";
import { Tabs, Swiper } from "antd-mobile";

export default function List() {
  const tabItems = [
    { key: "China", title: "内地" },
    { key: "HKT", title: "港台" },
    { key: "West", title: "欧美" },
    { key: "Korea", title: "韩国" },
    { key: "Japan", title: "日本" },
  ];
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
      <div className="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">
        MV排行榜
      </div>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current?.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        <Swiper.Item>
          <China />
        </Swiper.Item>
        <Swiper.Item>
          <HKT />
        </Swiper.Item>
        <Swiper.Item>
          <West />
        </Swiper.Item>
        <Swiper.Item>
          <Korea />
        </Swiper.Item>
        <Swiper.Item>
          <Jepan />
        </Swiper.Item>
      </Swiper>
    </div>
  );
}
