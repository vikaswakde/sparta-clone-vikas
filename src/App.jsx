import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Manage,
  HandHolding,
  Training,
  Testimonials,
  Footer,
  ContactUs,
} from "./components/index";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Manage />
            <HandHolding />
            <Training />
            <Testimonials />
            <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
