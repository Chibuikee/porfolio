import { UseMobileToggler } from "../hooks/paramsSetter";
import { BiMenuAltRight } from "react-icons/bi";
function Nav() {
  const { mobileView, toggler } = UseMobileToggler();
  return (
    <nav className="fixed top-0 z-[49] w-screen py-[15px] bg-[#2b3d4f]">
      <div className="px-[30px] lg:px-[15px] md:w-[750px] relative pc:w-[970px] xl:w-[1170px] mx-auto flex justify-between items-center  py-[10px] transition-all duration-100  ">
        <h1 className="text-[23px] text-white relative font-semibold first-letter:text-[#16c0f0] after:absolute after:content-[' '] after:w-[5px] after:h-[5px] after:ml-[3px] after:bg-[#16c0f0] after:bottom-[10px] ">
          Chibuike
        </h1>
        <BiMenuAltRight
          onClick={() => toggler("open", true)}
          size={40}
          className="text-[#16c0f0] cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Nav;
