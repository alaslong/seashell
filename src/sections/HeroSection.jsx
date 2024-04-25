import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <div className="flex flex-col justify-evenly items-center h-[95%] w-full">
    //   <h2 className="text-5xl">We make mindful movement friendly and accessible.</h2>
    //   <button className="btn btn-lg">
    //     Book a class for your team in seconds
    //   </button>
    //   <p className="text-2xl">Our approach to corporate wellbeing is as unique as your business.</p>
    // </div>


<div className="hero h-screen" id="">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
      <h1 className="text-6xl text-primary font-bold my-6">We simplify B2B <span className="text-accent">wellness</span>.</h1>
      <Link to="/book" className="btn btn-base-100 text-primary btn-lg my-7 ">Take care of your team today<span className="text-sm bg-base-100 text-primary border-2 border-primary rounded-3xl px-1">&rarr;</span></Link>
      {/* <p className="text-2xl my-10">our approach to corporate wellbeing is as unique as your business</p> */}
      
    </div>
  </div>
</div>
  );
};

export default HeroSection;
