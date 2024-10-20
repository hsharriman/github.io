import { NavLink } from "react-router-dom";

export interface TextHyperlinkProps {
  text: string;
  link: string;
  isPDF?: boolean;
}
export const TextHyperlink = (props: TextHyperlinkProps) => {
  const hyperlinkCSS =
    "font-ibmMono text-themeMint hover:text-white transition-all";
  if (props.isPDF) {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={hyperlinkCSS}
      >
        {props.text}
      </a>
    );
  }
  return (
    <NavLink to={props.link} className={hyperlinkCSS}>
      {props.text}
    </NavLink>
  );
};
