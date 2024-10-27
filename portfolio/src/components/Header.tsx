import { NavLink } from "react-router-dom";
import { HeaderType } from "./ClrChangeLetter";
import { SparkleLetters } from "./SparkleLetters";

export interface HeaderProps {
  showName?: boolean;
}
export const Header = (props: HeaderProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-20 pt-2 pl-2 bg-gradient-to-t from-transparent to-themeBackgroundBlue flex flex-row gap-4">
      <NavLink to="/">
        <img
          src={"/loading.gif"}
          alt="favicon"
          className="w-12 h-auto sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16"
        />
      </NavLink>
      {props.showName && (
        <div
          className={`text-themeDarkBlue font-ibmMono text-3xl flex items-start h-full leading-7`}
        >
          <SparkleLetters
            text={["Hwei-Shin", "Harriman"]}
            prefix="header"
            type={HeaderType.H4}
            defaultClr="text-themeBlue"
            separator={<br />}
          />
        </div>
      )}
    </div>
  );
};
