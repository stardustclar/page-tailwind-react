import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

function Carousel() {
  const slides = [
    {
      "img": "images/rep.jpeg"
    },
    {
      "img": "images/rep1.jpeg"
    },
    {
      "img": "images/rep2.jpeg"
    },
    {
      "img": "images/rep3.jpeg"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative">
      <div
      style={{ backgroundImage: `url(${slides[currentIndex].img})`}}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

      </div>
      <div className="absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blue-500 cursor-pointer ">
        <ArrowLeftIcon onClick={prevSlide} width={20} />
      </div>
      <div className="absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blue-500 cursor-pointer ">
        <ArrowRightIcon onClick={nextSlide} width={20} /> 
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl cursor-pointer">
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel