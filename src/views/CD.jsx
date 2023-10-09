/** 数字专辑 */
import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import Title from '../Tool/Title';
import { CDData } from '../AxiosData/AxiosData';

export default function CD() {
  const [list, setList] = useState([]);
  useEffect(() => {
    CDData()
      .then((res) => {
        // console.log(res.data.data.blocks[5].creatives);
        setList(res.data.data.blocks[5].creatives);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`ERROR:CDData:${err}`);
      });
  }, []);
  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.resources[0].resourceId}>
        <ul className="w-[88vw] pb-[3.5vw]  pt-1">
          {item.resources.map((vul) => (
            <li key={vul.resourceId} className="w-[88vw] flex pl-2 pt-[2.7vw]">
              <img
                className="w-[14.5vw] h-[14.5vw] rounded-[10px] "
                src={vul.uiElement.image.imageUrl}
                alt=""
              />
              <div className="pt-[3vw] ml-1">
                <p className="text-[2.5vw] text-[#3e465b]">
                  {vul.uiElement.mainTitle.title}
                </p>
                <p className="tetx-[2.36vw] text-[#79838f]">
                  {vul.uiElement.subTitle.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Swiper.Item>
    );
  });

  return (
    <div className=" border-t-[1px] border-[#ebedf2] pl-[2vw]">
      <Title>新歌新碟\数字专辑</Title>
      <Swiper slideSize={85} trackOffset={10} indicator={() => null}>
        {items}
      </Swiper>
    </div>
  );
}
