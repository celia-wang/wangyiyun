/**推荐歌单 数据未渲染 */
import React, { useEffect, useState } from "react";
import Scroll from "../Tool/Scroll";
import Title from "../Tool/Title";
import { PlayListData } from "../AxiosData/AxiosData";
import { Ellipsis, Swiper } from "antd-mobile";
export default function PlayList() {
  let [list, setList] = useState([]);
  useEffect(() => {
    PlayListData()
      .then((res) => {
        setList(res.data.data.blocks[1].creatives);
        // console.log(res.data.data.blocks[1].creatives);
      })
      .catch((err) => {
        console.log("ERROR:推荐歌单数据请求失败...");
      });
  }, []);
  // const indexList = list[0].resources;
  const indexItem = list.map((vul, i) => {
    if (i == 0) {
      return (
        <Swiper.Item key={i}>
          <Swiper
            key={i}
            autoplay
            loop
            indicator={() => null}
            direction="vertical"
            style={{ "--height": "50vw" }}
          >
            {vul.resources.map((item, index) => {
              return (
                <Swiper.Item key={index}>
                  <div
                    key={index}
                    className="w-[31vw] h-[100%] mr-3 rounded-lg"
                  >
                    <img
                      className="w-[31vw] h-[31vw]"
                      src={item.uiElement.image.imageUrl}
                      alt=""
                    />
                    <span className=" inline-block w-[31vw] text-[3vw] text-[#3E4759] ">
                      <Ellipsis
                        direction="end"
                        rows={2}
                        content={item.uiElement.mainTitle.title}
                      />
                    </span>
                  </div>
                </Swiper.Item>
              );
            })}
          </Swiper>
        </Swiper.Item>
      );
    }
  });

  const items = list.map((item, index) => {
    if (index >= 1) {
      return (
        <Swiper.Item key={index}>
          <div key={index} className="w-[31vw] h-[100%] mr-3 rounded-lg">
            <img
              className="w-[31vw] h-[31vw]"
              src={item.uiElement.image.imageUrl}
              alt=""
            />
            <span className=" inline-block w-[31vw] text-[3vw] text-[#3E4759] ">
              <Ellipsis
                direction="end"
                rows={2}
                content={item.uiElement.mainTitle.title}
              />
            </span>
          </div>
        </Swiper.Item>
      );
    }
  });
  // console.log(items);

  return (
    <div className="pl-[2vw]">
      <Title>推荐歌单</Title>

      <Swiper slideSize={35} trackOffset={10} indicator={() => null}>
        {indexItem}
        {items}
      </Swiper>
    </div>
  );
}
