import Lottie from "lottie-react";
import animationData from "../../public/images/school.json";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <div className="font-poppins w-full md:flex px-4 py-24 gap-2 md:space-y-4">
      {/* HERO */}
      <div className="flex flex-col relative w-auto md:w-1/2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md shadow-slate-800">
        <div className="grid">
          <div className="w-1/2 justify-self-end">
            <Lottie animationData={animationData} width={50} height={50} />
          </div>
        </div>

        <div className="h-auto w-11/12 inset-x-0 -bottom-20 rounded-xl my-4 mx-auto absolute bg-white">
          <div className="justify-start p-4 flex flex-col">
            <h1 className="text-2xl">Hello</h1>
            <div className="gap-4 flex mx-10 py-2">
              <button className="bg-slate-200 rounded-xl w-1/4 py-1 font-semibold">
                <a href="/start">Start</a>
              </button>
              <button className="bg-slate-200 rounded-xl w-1/4 py-1 font-semibold">End</button>
            </div>
              <div className="flex py-3 gap-2 mx-4">
                <ExclamationCircleIcon className="h-6 w-7"/>
                <h1 className="text-sm">Lorem ipsum dolor sit amet</h1>
              </div>
          </div>
        </div>
      </div>

      {/* RIGHT BOX */}
      <div className="flex w-full justify-center items-center md:w-1/2 py-2 mt-16 lg:mt-auto md:mt-auto bg-slate-200 rounded-xl">
        <div className="p-8">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum
            expedita beatae voluptate fugit perspiciatis quo exercitationem
            minima quidem itaque fugiat rerum nobis temporibus, iure totam,
            cupiditate dolorum officia ratione necessitatibus vitae perferendis.
            Nam dolores sed aut. Doloremque laborum nisi aut, eaque maiores
            minus magni est, accusantium, dolores placeat delectus voluptatem
            corporis quisquam eum reiciendis modi doloribus. Placeat, porro
            adipisci maxime debitis quibusdam rerum sunt itaque, culpa quo iure
            enim maiores quisquam sed doloribus eveniet non excepturi asperiores
            quia deleniti voluptates qui. Laudantium quasi quo, numquam error
            magni soluta incidunt aliquam, explicabo odit quibusdam, id
            similique earum repellat assumenda consectetur.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
