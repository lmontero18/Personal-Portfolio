import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const HeaderWrapper = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};
