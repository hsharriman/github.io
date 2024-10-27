import { NavLink } from "react-router-dom";
import { icons } from "../assets/icons";
import { defaultIconTextCss } from "../utils/consts";

export interface PublicationLinkProps {
  pdf?: string;
  video?: string;
  poster?: string;
}

export const PublicationLinks = (props: PublicationLinkProps) => {
  return (
    <div className="flex flex-row gap-3">
      {props.pdf && (
        <a href={props.pdf} target="_blank" className={defaultIconTextCss}>
          {icons.pdf}
          {"pdf"}
        </a>
      )}
      {props.video && (
        <NavLink to={props.video} className={defaultIconTextCss}>
          {icons.video}
          {"video"}
        </NavLink>
      )}
      {props.poster && (
        <a href={props.poster} target="_blank" className={defaultIconTextCss}>
          {icons.poster}
          {"poster"}
        </a>
      )}
    </div>
  );
};
