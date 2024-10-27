import { NavLink } from "react-router-dom";
import { hoverTextClr } from "../utils/random";

export interface SparkleLinkProps {
  text: string;
  link: string;
  scrollTo?: () => void;
  isFile?: boolean;
  color: string;
  top: string;
  left: string;
  textSize: string;
}
export const SparkleLink = (props: SparkleLinkProps) => {
  const hoverColor = hoverTextClr(props.color);
  const gif = (
    <img
      className="w-6 h-6 lg:max-2xl:w-8 lg:max-2xl:h-8"
      src={`/cursors/pt2${props.color.toLowerCase()}.gif`}
      alt=""
    />
  );
  const innerText = (
    <>
      <img
        className="w-6 h-6 lg:max-2xl:w-8 lg:max-2xl:h-8"
        src={`/cursors/pt2${props.color.toLowerCase()}.gif`}
        alt=""
      />
      {props.text}
      <img
        className="w-6 h-6 lg:max-2xl:w-8 lg:max-2xl:h-8 lg:max-2xl:hidden"
        src={`/cursors/pt2${props.color.toLowerCase()}.gif`}
        alt=""
      />
    </>
  );
  const css = `lg:max-2xl:absolute ${props.textSize} ${props.top} ${props.left} text-white lg:max-2xl:text-themeDarkBlue font-ibmMono flex flex-row gap-2 items-center lg:max-2xl:text-4xl text-lg align-text-bottom ${hoverColor} sparklelink flex justify-between lg:max-2xl:gap-5`;
  if (props.scrollTo) {
    return (
      <button className={css} onClick={props.scrollTo}>
        {innerText}
      </button>
    );
  } else if (props.isFile) {
    return (
      <a className={css} href={props.link} target="_blank">
        {innerText}
      </a>
    );
  } else {
    return (
      <NavLink className={css} to={props.link}>
        {innerText}
      </NavLink>
    );
  }
};
