import React, { useEffect, useState } from "react";
import { SingerData } from "../AxiosData/SearchData"

export default function Singer() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    SingerData()
      .then((res) => {
        // console.log(res.data.data);
        setValue(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  const newArr = value.slice(0, 5);
  return <div className="flex px-[3vw] pb-4 flex-wrap">
    {newArr.map((item) => (
      <div class="p-[2vw] mr-[2vw] text-[3.5vw]   text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">{item.searchWord}</div>
    ))}
  </div>

}