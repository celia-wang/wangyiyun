/** 热门话题 */
import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import { HotTopicData } from '../AxiosData/AxiosData';
import Title from '../Tool/Title';

export default function HotTopic() {
  const [list, setList] = useState([]);
  useEffect(() => {
    HotTopicData()
      .then((res) => {
        // console.log(res.data.events);
        setList(res.data.events);
      })
      .catch((err) => {
        console.log(`HotTopicData error:${err}`);
      });
  }, []);

  const color = ['#949494', '#8685aa', '#ae734e'];
  const items = list.map((item, index) => {
    const i = index < 3 ? index : index % 3;
    return (
      <Swiper.Item key={item.id}>
        <div
          key={item.id}
          className="w-[65vw] h-[28vw] rounded-[10px] py-[4vw] px-3  mx-2 flex flex-col"
          style={{ background: `${color[i]}` }}
        >
          <h4 className="text-[4vw] text-[#fff]">{item.user.nickname}</h4>
          <div className="flex ">
            <div className="w-[39vw]">
              <p className="text-[2.6vw] text-[#d7d7d7]">484万热度</p>
              <p className="text-[2.6vw] text-[#fff] line-clamp-2">
                {item.user.signature}
              </p>
            </div>
            {/* <img className="w-[17.5vw] h-[17.5vw] rounded-[13px]" src={item.user.avatarUrl} alt="" /> */}
          </div>
        </div>
      </Swiper.Item>
    );
  });

  return (
    <div>
      <Title>热门话题</Title>
      <Swiper slideSize={78} trackOffset={10} indicator={() => null}>
        {items}
      </Swiper>
    </div>
  );
}
