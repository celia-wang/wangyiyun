/** 排行榜  */
import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import { NewSongListData } from '../AxiosData/AxiosData';
import Title from '../Tool/Title';

export default function NewSongList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    NewSongListData()
      .then((res) => {
        // console.log(res.data.data.blocks[3].creatives);
        setList(res.data.data.blocks[3].creatives);
      })
      .catch((err) => {
        console.log(`NewSongListData:${err}`);
      });
  }, []);

  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.resources[1].resourceId}>
        <div className="my-2 mr-2 mt-0 overflow-hidden">
          <ul className="w-[88vw] bg-[#fff]   rounded-[10px] pt-4 pb-4 flex flex-col ">
            <li className="w-[75vw] pl-2 pr-2 flex justify-between">
              <div>
                {item.uiElement.mainTitle.title}
                <span />
              </div>
              <span className=" text-[#939ba1]">
                {item.uiElement.mainTitle.titleDesc}
              </span>
            </li>
            {item.resources.map((vul, i) => {
              return (
                <li
                  key={vul.resourceId}
                  className="w-[88vw] pl-2 pt-[2.7vw] flex justify-between"
                >
                  <img
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px]"
                    src={vul.uiElement.image.imageUrl}
                    alt=""
                  />
                  <div className=" pr-[5.7vw] pl-[4.3vw] flex items-center ">
                    <span className=" inline-block mr-3 text-[#c28ec8] text-[2.8vw] font-[800]">
                      {i + 1}.
                    </span>
                    <h4 className=" inline-block w-[40vw] text-[3.5vw] text-[#3e465b] overflow-hidden text-ellipsis whitespace-nowrap">
                      {vul.uiElement.mainTitle.title}
                    </h4>
                    <span className=" ml-4 text-[2.43vw]">
                      {vul.uiElement.labelText.text}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Swiper.Item>
    );
  });
  return (
    <div className="pl-[2vw]">
      <Title>排行榜</Title>
      <Swiper slideSize={96} trackOffset={10} indicator={() => null}>
        {items}
      </Swiper>
    </div>
  );
}
