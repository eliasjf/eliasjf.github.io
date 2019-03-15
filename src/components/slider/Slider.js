import React, {useState} from 'react';
import PropTypes from "prop-types";
import useDebouncedCallback from 'use-debounce/lib/callback';

import './Slider.scss'

function Slider(props) {

  const [currentSlide, setCurrentSlide] = useState(0);

  let {slides} = props;
  slides = slides === undefined ? [] : slides;
  const slideCount = slides.length - 1;

  const getSlides = () => {
    return slides.map((slide, i) => {
      const showSlide = i === currentSlide ? "visible" : "hidden";
      return (
        <div className={showSlide} key={i}>
          {slide}
        </div>
      )
    })
  };

  const handleClick = () => {
    return currentSlide === slideCount ? 0 : currentSlide + 1;
  };

  const handleKeyPress = (e) => {
    const leftArrowKeyCode = 37;
    const rightArrowKeyCode = 39;
    if (e && e.keyCode === rightArrowKeyCode) return handleSlideForward();
    if (e && e.keyCode === leftArrowKeyCode) return handleSlideBack();
    return currentSlide;
  };

  const handleSlideForward = () => {
    console.log(currentSlide);
    if (currentSlide < slideCount) return currentSlide + 1;
    return 0;
  };

  const handleSlideBack = () => {
    if (currentSlide > 0) return currentSlide - 1;
    return currentSlide;
  };

  const handleWheel = (deltaY) => {
    return deltaY < 0 ? handleSlideBack() : handleSlideForward();
  };

  const [debouncedCallback] = useDebouncedCallback(
    // function
    (deltaY) => {
      setCurrentSlide(handleWheel(deltaY));
    },
    // delay in ms
    50,
    // deps (in case your function has closure dependency like https://reactjs.org/docs/hooks-reference.html#usecallback)
    [currentSlide]
  );

  return (
    <div
      className={"slider"}
      onWheel={e => debouncedCallback(e.deltaY)}
      tabIndex="0"
      onClick={() => setCurrentSlide(handleClick())}
      onKeyDown={e => setCurrentSlide(handleKeyPress(e))}
    >
      {getSlides()}
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object)
};

export default Slider;