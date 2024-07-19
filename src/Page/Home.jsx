import React from "react";

function Home() {
  return (
    <div className="w-[1512px] h-[982px] box-border bg-mainBlack  bg-custom-image border-[0.01px] border-black relative overflow-hidden">
      <div className="w-[668px] h-[461px] absolute left-[405px] bottom-[818px]  bg-light blur-[120px] rounded-full"></div>
      <div className="w-[770px] h-[456px] absolute left-[760px] bottom-[781px]  bg-light blur-[120px] rounded-full"></div>
      <nav className="w-[1512px] h-[80px] bg-navBlack z-50 mt-[-2px] fixed flex items-center backdrop-blur-lg">
        <div className="w-[87px] height-[54px] ml-[243px] rounded-[30px] ">
          <img src="../assets/logo.svg" alt="kidjig_Logo" />
        </div>
        <div className="w-[456px] h-[30px] ml-[191px] flex gap-x-[28px]">
          <p className="text-sm text-custum font-Inter">About</p>
          <p className="text-sm text-custum font-Inter">Services</p>

          <p className="text-sm text-custum font-Inter">Process</p>
          <p className="text-sm text-custum font-Inter">Work</p>
          <p className="text-sm text-custum font-Inter">Price</p>
          <p className="text-sm text-custum font-Inter">FAQs</p>
        </div>
        <div>
          <button className="ml-[115px] border-[1px] border-border text-bigFont font-Inter rounded-[12px] h-[53px] w-[134px] ">
            Book a call
          </button>
        </div>
      </nav>
      <main className="w-[778px] h-[249px] ml-[279px]  mt-[270px]">
        <div className="w-[778px] h-[123px] relative">
          <p className="font-Inter leading-[60px]  text-[56px] tracking-[-0.01em] text-bigFont">
            Empowering Lives Through Innovative{" "}
            <span className="font-bold">AI</span> Technologies.
          </p>
          <p className="w-[51px] h-[7px] bg-AI absolute left-[264px] bottom-0"></p>
        </div>
        <p className="font-Inter text-custum1 font-normal tracking-[-0.01em] leading-[30px] text-[22px]  mt-[17px] mr-[13px]">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>

        <button className=" bg-button text-bigFont font-Inter rounded-[12px] h-[53px] w-[239px] font-bold leading-[30px] tracking-[-0.01em] text-[18px]  mt-[26px]  ">
          Explore Our Services
        </button>
        <button className=" border-[1px] border-border text-bigFont font-Inter rounded-[12px] h-[53px] w-[155px] font-semibold leading-[30px] tracking-[-0.01em] text-[18px] mt-[26px]   ml-[15px]">
          Learn more
        </button>
      </main>
      <div>
        <p className="mt-[82px] ml-[284px] font-Inter   font-normal text-[24px] leading-[30px] tracking-[-0.01em]">
          <span className="text-gradient ">
            From Ideas to Software Solutions
          </span>{" "}
          💡✨{" "}
          <span className="text-gradient ">
            From Ideas to Software Solutions
          </span>
          🌟✨ <span className="text-gradient ">From Ideas to</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
