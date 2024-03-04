import { handHolding } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button.jsx";


const HandHolding = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Immediate Question <br className="sm:block hidden" /> <strong className="text-gradient-red"> & </strong> Answer Solving
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Make sure you know and move on Arcu tortor, purus in mattis at sed
        integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet
        ultrices ac, ametau.{" "}
      </p>
      <Button styles={"mt-10"} />
    </div>
    <div className={layout.sectionImg}>
      <img src={handHolding} alt="handHolding" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default HandHolding;
