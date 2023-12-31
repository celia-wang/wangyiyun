import React, { useState } from 'react';
import http from '../AxiosData/ListData';

export default function China() {
  const [list, setList] = useState([]);
  http
    .get('/top/mv?limit=50&area=%E5%86%85%E5%9C%B0&cookie=')
    .then((res) => {
      // console.log(res.data.data);
      setList(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="">
      {list.map((items, index) => {
        return (
          <li key={items} className="px-[4vw] ">
            <img
              className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              src={items.cover}
              alt=""
            />
            <div className=" h-[15vw]  ">
              <p className="flex">
                <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                  {index + 1}
                </span>
                <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                  {items.name}
                </span>
              </p>
              <p className="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                new {items.artistName}
              </p>
            </div>
          </li>
        );
      })}
    </div>
  );
}
