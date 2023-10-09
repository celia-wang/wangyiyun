/** 推荐歌单 数据未渲染 */
import React, { useEffect, useState } from 'react';
import { Ellipsis, Swiper } from 'antd-mobile';
import Title from '../Tool/Title';
import { PlayListData } from '../AxiosData/AxiosData';

export default function PlayList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    PlayListData()
      .then((res) => {
        setList(res.data.data.blocks[1].creatives);
        // console.log(res.data.data.blocks[1].creatives);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`推荐歌单数据请求失败:${err}`);
      });
  }, []);
  // const indexList = list[0].resources;
  const indexItem = list.map((vul, i) => {
    if (i === 0) {
      return (
        <Swiper.Item key={vul.resources[0].resourceId}>
          <Swiper
            autoplay
            loop
            indicator={() => null}
            direction="vertical"
            style={{ '--height': '50vw' }}
          >
            {vul.resources.map((item) => {
              return (
                <Swiper.Item key={item.resourceId}>
                  <div
                    key={item.uiElement.image.imageUrl}
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
    return null;
  });

  const items = list.map((item, index) => {
    if (index >= 1) {
      return (
        <Swiper.Item key={item.resources[0].resourceId}>
          <div className="w-[31vw] h-[100%] mr-3 rounded-lg">
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
    return null;
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
