
function Card() {

  return (
    <div className="md:flex-col gap-4 p-6 pt-[90px] font-poppins">
    {/* <div className="flex flex-col w-full bg-slate-400 md:w-1/2 p-3 rounded-lg">
      <h1 className="text-white ">Watching the chemtrails over the country club</h1>
      <img src="/images/bitmap.png" className="w-44" />
    </div> */}

    <div className="flex flex-wrap w-full gap-4 py-4 justify-center">
      <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
        <h1 className="text-white ">You&apos;re in the wind</h1>
        <img src="/images/bitmap2.png" className="w-20 mx-auto" />
      </div>

      <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
        <h1 className="text-white ">I&apos;m in the water</h1>
        <img src="/images/bitmap3.png" className="w-24 mx-auto" />
      </div>

      <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
        <h1 className="text-white ">Nobody&apos;s son </h1>
        <img src="/images/bitmap4.png" className="w-24 mx-auto py-2" />
      </div>

      <div className="flex flex-col bg-slate-400 md:w-1/2 p-3 rounded-lg">
        <h1 className="text-white ">Nobody&apos;s daughter</h1>
        <img src="/images/bitmap.png" className="w-40 mx-auto py-10" />
      </div>
    </div>
  </div>
  )
}

export default Card