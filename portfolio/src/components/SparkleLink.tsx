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
}
export const SparkleLink = (props: SparkleLinkProps) => {
  const hoverColor = hoverTextClr(props.color);
  const gif = (
    <img
      className="w-8 h-8"
      src={`/cursors/pt2${props.color.toLowerCase()}.gif`}
      alt=""
    />
  );
  const innerText = (
    <>
      {gif}
      {props.text}
      {gif}
    </>
  );
  const css = `absolute ${props.top} ${props.left} text-themeDarkBlue font-ibmMono flex flex-row text-4xl align-text-bottom ${hoverColor} sparklelink flex justify-between gap-5`;
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
