import { billing, complete } from "../assets";
import styles, { layout } from "../style";

const Managment = () => {
  return (
    // <section id="bootcamp" className={layout.sectionReverse}>
    <section id="services" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={billing}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] filter brightness-90 rounded-md hover:border-gray-200 hover:border-2"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full red__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full white__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Billing Services</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Simplify billing with our powerful software solutions.CollabCarze streamlines revenue management, ensuring accuracy and efficiency. Experience effortless billing today!
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">

          {/* <img
            src={complete}
            alt="tick-img"
            className="w-[120px] h-[60px] object-contain mr-5 "
          />{" "} */}
        </div>
      </div>
    </section>
  );
};

export default Managment;
