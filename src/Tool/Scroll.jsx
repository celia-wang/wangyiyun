import React from 'react';
// import propTypes from 'prop-types';

export default function Scroll(pros) {
  const { children } = pros;
  return (
    <div className="w-[100%] bg-[#abc] flex  overflow-hidden overflow-x-scroll">
      {children}
    </div>
  );
}
// Scroll.propTypes = {
//   children: propTypes.string.isRequired
// };
