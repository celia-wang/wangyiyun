/** 音乐日历 */
import React, { useEffect, useState } from 'react';
import { CalendarData } from '../AxiosData/AxiosData';
import Title from '../Tool/Title';

export default function Calendar() {
  const [list, setList] = useState([]);
  useEffect(() => {
    CalendarData()
      .then((res) => {
        // console.log(res.data);
        setList(res.data.data.calendarEvents);
      })
      .catch((err) => {
        console.log(`CalendarData error...${Date.now()},${err}`);
      });
  }, []);
  return (
    <div>
      <Title>音乐日历</Title>
      <div className="w-[91vw] bg-[#fff] mr-2  ml-2  rounded-[10px] px-4 py-4">
        {list.map((vul) => {
          return (
            <li key={vul.title} className="mb-5 flex justify-between">
              <div>
                <span className="text-[2.75vw] text-[#aaadb5]">9/20</span>
                <p className="text-[3.5vw] text-[#3e4558]">{vul.title}</p>
              </div>
              <img className=" w-[15vw] h-[15vw]" src={vul.imgUrl} alt="" />
            </li>
          );
        })}
      </div>
    </div>
  );
}
