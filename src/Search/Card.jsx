/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { PlayListData } from '../AxiosData/SearchData';

export default function Card(props) {
  const { id, name } = props;
  // return  <div>{props.id} {props.name}</div>
  const [list, setList] = useState([]);
  // console.log(props.id);
  useEffect(() => {
    PlayListData(id)
      .then((res) => setList(res.data.playlist.tracks))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="mr-[4vw]">
      <div className="bg-[#fff]  rounded-[2vw] ml-[2.344vw]  w-[243.75px]">
        <div className="dark:border-b-[#7d8397] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
          <span className="text-[4vw] text-[#000000]  mr-[3.359vw] ml-[4vw]">
            {name}
          </span>
          <div className="h-[5.235vw] bg-[#d9dbd982]  flex items-center  pr-[2vw] rounded-[3vw]">
            <span />
            <span className="text-[2.6vw] text-[#000000]">播放</span>
          </div>
        </div>
        <div className="pr-[2vw]">
          {list.map((mitem, index) => {
            if (index < 20) {
              return (
                <div
                  key={mitem.id}
                  className="my-[2.7vw] flex items-center h-[8vw]"
                >
                  <span className="text-[3.2vw] w-[8.83vw] text-center font-[400] text-[red]">
                    {index + 1}
                  </span>
                  <span className="text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">
                    {mitem.name}
                  </span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired
};
