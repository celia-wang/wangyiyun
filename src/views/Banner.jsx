/** 轮播图 */

import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import { BannerPic } from '../AxiosData/AxiosData';

function Banner() {
  const [list, setList] = useState([]);
  useEffect(() => {
    BannerPic()
      .then((res) => {
        // console.log(req.data.data.blocks[0].extInfo.banners)
        setList(res.data.data.blocks[0].extInfo.banners);
      })
      .catch((err) => {
        console.log(`ERROR:轮播图数据请求失败:${err}`);
      });
  }, []);

  // 图片轮播 bannerId pic
  const items = list.map((vul) => (
    <Swiper.Item key={vul.bannerId}>
      <div>
        <img className="w-[88vw] h-[35vw]" src={vul.pic} alt="轮播图" />
      </div>
    </Swiper.Item>
  ));

  return (
    <div className="w-[90vw] h-[36vw] rounded-2xl flex   items-center overflow-hidden m-[auto]">
      <Swiper autoplay loop>
        {items}
      </Swiper>
    </div>
  );
}

export default Banner;
