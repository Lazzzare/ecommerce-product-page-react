import { useState } from "react";

interface SliderProps {
  slides: any;
}

const ImageSlider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log(slides[currentIndex].image);
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover "
      ></div>
    </div>
  );
};

export default ImageSlider;
