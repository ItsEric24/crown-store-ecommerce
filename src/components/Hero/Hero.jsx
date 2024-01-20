import Fashion2 from "/fashion-slider2.jpg";

function Hero() {
  return (
    <div className="w-full relative">
      <img
        src={Fashion2}
        alt="Hero-img"
        className="w-full object-cover lg:h-[600px]"
      />
      <div className="absolute top-[40%] rounded-full left-[25%] right-[25%] bg-transparent">
        <h1 className="text-3xl font-anton text-center md:text-6xl drop-shadow-2xl lg:text-8xl leading-none text-white font-extrabold">
          CROWN STORE
        </h1>
      </div>
    </div>
  );
}
export default Hero;
