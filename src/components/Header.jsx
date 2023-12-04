import img1 from "../images/illustration-woman-online-mobile.svg";
import img2 from "../images/bg-pattern-mobile.svg";
import im3 from "../images/illustration-woman-online-desktop.svg";
import img4 from "../images/bg-pattern-desktop.svg";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden relative">
      <img className="w-[75%] translate-y-[-7rem] sm:hidden " src={img1} />
      <img className="w-[75%] translate-y-[-3rem] absolute sm:hidden" src={img2} />
      <img className=" hidden sm:block sm:translate-x-[-8rem] sm:w-[85%]" src={im3}  />
      <img src={img4} className=" hidden sm:block sm:w-[100%] sm:translate-y-[-4rem] sm:translate-x-[-2rem] sm:absolute"  />
    </div>
  );
};

export default Header;
