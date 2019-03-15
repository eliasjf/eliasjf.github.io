import React from 'react'
import PropTypes from "prop-types";

import './Slide.scss'

function Slide(props) {
  const {imgSrc, className, children} = props;

  return (
    <div className="slide" style={{backgroundImage: `linear-gradient(rgba(0, 47, 75, 0.6), rgba(220, 66, 37, 0.6)), url(${imgSrc})`}}>
      <div className={className}>
        {children}
      </div>
    </div>
  );
}

Slide.propTypes = {
  imgSrc: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
};

export default Slide;