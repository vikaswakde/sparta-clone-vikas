import { billing, complete, training } from "../assets";
import styles, { layout } from "../style";

const Training = () => {
  return (
    // <section id="bootcamp" className={layout.sectionReverse}>
    <section id="services" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={training}
          alt="training"
          className="w-[100%] h-[100%] relative z-[5] filter brightness-90 rounded-md hover:border-gray-200 hover:border-2"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full red__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full white__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Training from Industry Experts</h2>
        <p className={`${styles.paragraph} max-w-[470px] font-semibold mt-5`}>
          <span className="underline"> Our program includes:</span>
          <ul className={`${styles.paragraph} max-w-[470px] mt-2`}>
            <li>LinkedIn Profile Building</li>
            <li>Open source contribution on Github</li>
            <li>Resume Building</li>
            <li>Learning in Public</li>
            <li>Career Counselling</li>
            <li>Competitive Programming</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Training;
