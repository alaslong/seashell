const HeroSection = () => {
  return (
    // <div className="flex flex-col justify-evenly items-center h-[95%] w-full">
    //   <h2 className="text-5xl">We make mindful movement friendly and accessible.</h2>
    //   <button className="btn btn-lg">
    //     Book a class for your team in seconds
    //   </button>
    //   <p className="text-2xl">Our approach to corporate wellbeing is as unique as your business.</p>
    // </div>


<div className="hero min-h-[95%]">
  <div className="hero-content text-center">
    <div className="max-w-3xl">
      <h1 className="text-5xl text-primary font-bold my-6">We simplify B2B <span className="text-accent">wellness.</span></h1>
      <button className="btn btn-neutral text-primary btn-lg my-6 ">Take care of your team today.</button>
      {/* <p className="text-2xl my-10">our approach to corporate wellbeing is as unique as your business</p> */}
      
    </div>
  </div>
</div>
  );
};

export default HeroSection;
