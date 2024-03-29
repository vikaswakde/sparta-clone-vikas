import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.9px] xs:leading-[43.15px] text-white">
          {stat.value}
          <span className="text-[32px]">%</span>
        </h4>
        <p className="font-poppins font-noraml xs:text-[20.45px] text-[15.35px] xs:leading-[25.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
