import Carousel from "../comp/Carousel";

function Test() {
  return (
    <>
    <div className="md:flex-col w-full h-screen gap-4 p-6 font-poppins">
      <div className="flex flex-col w-full bg-slate-400 md:w-1/2 p-3 rounded-lg">
        <h1 className="text-white ">Watching the chemtrails over the country club</h1>
        {/* <img src="/images/bitmap.png" className="w-44" /> */}
      </div>

      <div className="flex flex-wrap w-full gap-4 py-4 justify-center">
        <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
          <h1 className="text-white ">You&apos;re in the wind</h1>
          {/* <img src="/images/bitmap2.png" className="w-20" /> */}
        </div>

        <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
          <h1 className="text-white ">I&apos;m in the water</h1>
          {/* <img src="/images/bitmap3.png" className="w-24" /> */}
        </div>

        <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
          <h1 className="text-white ">Nobody&apos;s son </h1>
          {/* <img src="/images/bitmap4.png" className="w-24" /> */}
        </div>

        <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
          <h1 className="text-white ">Nobody&apos;s daughter</h1>
          {/* <img src="/images/bitmap2.png" className="w-20" /> */}
        </div>
      </div>

      <Carousel />
    </div>

    </>
  );
}

export default Test;
