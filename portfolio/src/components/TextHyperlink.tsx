import { NavLink } from "react-router-dom";

export interface TextHyperlinkProps {
  text: string;
  link: string;
}
export const TextHyperlink = (props: TextHyperlinkProps) => {
  return (
    <NavLink
      to={props.link}
      className={
        "font-ibmMono text-themeMint underline hover:text-white transition-all"
      }
    >
      {props.text}
    </NavLink>
  );
};
