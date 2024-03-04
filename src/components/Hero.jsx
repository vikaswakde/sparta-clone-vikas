import styles from "../style";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-5 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">100%</span> Discount for{" "}
          <span className="text-white">First Time</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient-education">Education</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Revolution
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The perfect learning environment for beginners in coding <br></br>{" "}
        <div className="max-w-xl selection:bg-purple-300 selection:text-purple-900">
          {" "}
          <mark className="bg-yellow-300 pt-1 pb-1 fully-rounded">
            Sparta Coding Club provides the optimal learning environment for
            beginners
          </mark>
        </div>{" "}
        so that they can take classes without interruption until completion.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        className="w-[100%] h-auto relative z-[5] mb-10 transform -scale-x-100 ml-10"
      />

      {/* Gradient Start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] top-20 blue__gradient" />
      {/* Gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
