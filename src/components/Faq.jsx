import { useState } from "react";
import img1 from "../images/icon-arrow-down.svg";

const Faq = ({ title, desc, heading }) => {
  const [toggle, setToggle] = useState(false);

  // const toggleText = () => {
  //   if (text) {
  //     setText(false);
  //     return;
  //   }
  //   setText(true);
  // };
  return (
    <article className=" border-b-[1px]  border-light-grayish-blue px-4 mb-4 text-sm" >
      <header className='flex justify-center items-center gap-4 font-fw-400 pt-2 pb-4'>
        <h2 className={`text-very-dark-grayish-blue ${toggle ? 'font-fw-700 text-very-dark-desaturated-blue' : '' }`}>{ heading}</h2>
        <button type="button" onClick={() => setToggle(!toggle)}>{toggle? <img className=" w-2 h-2 rotate-180" src={img1} alt={title} /> : <img src={img1} alt={title} className=" w-2 h-2" />}</button>
      </header>
      {toggle && <p className=" text-light-grayish-blue px-2 pb-2 text-fs-12">{desc}</p>}
    </article>
  );
};
export default Faq;
