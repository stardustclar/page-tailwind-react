import Card from "../comp/Card";
import Carousel from "../comp/Carousel";
import NavigationBar from "../comp/NavigationBar";

function Test() {
  return (
    <>
    <div className="md:flex-col w-full h-screen px-6 font-poppins">
      <NavigationBar />
      <Card />
      <Carousel />
    </div>

    </>
  );
}

export default Test;
