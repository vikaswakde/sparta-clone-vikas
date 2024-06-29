import React from "react";

const Button = ({ styles }) => {
  const handleClick = () => {
    const contactUsSection = document.getElementById('contactus');
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleClick}
    >
      Get Started
    </button>
  );
};

export default Button;
