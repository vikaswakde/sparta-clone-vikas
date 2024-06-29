import { webApp } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button.jsx";

const HandHolding = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Business Websites
        <br className="sm:block hidden" />{" "}
        <strong className="font-bold text-gray-400"> & </strong> Andriod Applications
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We help you make Unlock Your Digital Potential, Reach out to us to Build a Powerful Business Website today and stay ahead of others with use of technology in this competitive world. {" "}
      </p>
      <Button styles={"mt-10"} />
    </div>
    <div className={layout.sectionImg}>
      <img src={webApp} alt="handHolding" className="w-[80%] h-[70%] relative z-[5] filter brightness-90 rounded-md hover:border-gray-200 hover:border-2" />
    </div>
  </section>
);

export default HandHolding;
