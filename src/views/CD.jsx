/**数字专辑 */
import React, { useEffect, useState } from "react";
import Title from "../Tool/Title";
import { CDData } from "../AxiosData/AxiosData";
import { Swiper } from "antd-mobile";

export default function CD() {
  let [list, setList] = useState([]);
  useEffect(() => {
    CDData()
      .then((res) => {
        setList(res.data.data.blocks[5].creatives);
      })
      .catch((err) => {
        console.log("ERROR:CDData...");
      });
  }, []);
  const items = list.map((item, index) => {
    return (
      <Swiper.Item key={index}>
        <ul key={index} className="w-[88vw] pb-[3.5vw]  pt-1">
          {item.resources.map((vul, i) => {
            return (
              <li key={i} className="w-[88vw] flex pl-2 pt-[2.7vw]">
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
            );
          })}
        </ul>
      </Swiper.Item>
    );
  });

  return (
    <div pl-2 className=" border-t-[1px] border-[#ebedf2]">
      <Title>新歌新碟\数字专辑</Title>
      <Swiper slideSize={85} trackOffset={10} indicator={() => null}>
        {items}
      </Swiper>
      {/* <Scroll>
  <div className="w-[400vw] flex   pt-1 pl-2">
    {
      list.map(item => {
        return <ul className="w-[88vw] pb-[3.5vw]">
          {
            item.resources.map( (vul) => {
              return <li className="w-[88vw] flex">
              <img className="w-[14.5vw] h-[14.5vw] rounded-[10px] " src={vul.uiElement.image.imageUrl} alt="" />
              <div className="pt-[3vw] ml-1">
                <p className="text-[2.5vw] text-[#3e465b]">{vul.uiElement.mainTitle.title}</p>
                <p className="tetx-[2.36vw] text-[#79838f]">{vul.uiElement.subTitle.title}</p>
              </div>
            </li>
            })
          }
        
      </ul>
      })
    }
    
  </div>
 </Scroll> */}
    </div>
  );
}
