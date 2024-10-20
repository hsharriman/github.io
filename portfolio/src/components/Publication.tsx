import { NavLink } from "react-router-dom";
import { icons } from "../assets/icons";
import { PublicationLinkProps, PublicationLinks } from "./PublicationLinks";

export enum AwardType {
  HonorableMention = "Best Paper Honorable Mention",
  SRCGrandFinalist = "SRC Grand Finalist",
  FirstPlaceUndergrad = "1st Place, Undergraduate Division",
  //...
}

export interface TeaserProps {
  img: string;
  caption: string;
}
export interface PublicationProps {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  award?: string[];
  links: PublicationLinkProps;
  ref?: string;
  abstract?: string;
  keywords?: string[];
  teaser?: TeaserProps;
}

export const Publication = (props: PublicationProps) => {
  const authors = props.authors.map((author, idx) => (
    <span
      className={`font-notoSans whitespace-nowrap text-themePurpleLight ${
        author.includes("Harriman") ? "font-bold" : ""
      }`}
    >
      {author}
      {idx === props.authors.length - 1 ? "." : ","}
      &nbsp;
    </span>
  ));
  const linkContent = (
    <>
      <span className="font-notoSans text-white text-lg">
        <img src="/cursors/pt1pink.gif" className="h-4 inline pr-2" />
        {props.title}
      </span>
      <p className="flex flex-wrap break-words">
        {authors}
        <span className="italic text-themePurpleLight">
          {props.venue + "."}
        </span>
      </p>
    </>
  );
  return (
    <span className="flex flex-col pb-4 proj transition-all duration-500">
      {props.links.pdf ? (
        <NavLink to={props.id}>{linkContent}</NavLink>
      ) : (
        linkContent
      )}
      {props.award &&
        props.award.map((a) => (
          <span className="text-base text-themeMint flex flex-row items-center">
            {icons.ribbon}
            {a}
          </span>
        ))}
      <PublicationLinks {...props.links} />
    </span>
  );
};
