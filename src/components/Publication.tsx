import { NavLink } from "react-router-dom";
import { icons } from "../assets/icons";
import { HoverItem } from "./HoverItem";
import { PublicationLinkProps } from "./PublicationLinks";

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
  thumb?: string;
}

export const Publication = (props: PublicationProps) => {
  const authors = props.authors.map((author, idx) => (
    <span
      className={`font-notoSans whitespace-nowrap text-themeBlue ${
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
      <span className="font-ibmMono text-white flex flex-row items-start gap-3 text-base lg:text-xl">
        <img src="/cursors/pt1purple.gif" className="h-4 inline mt-1" />
        {props.title}
      </span>
      <p className="ml-1 pl-6 flex flex-wrap break-words">
        {authors}
        <span className="italic text-themeBlue">{props.venue + "."}</span>
      </p>
    </>
  );
  const innerContent = (
    <span className="flex flex-col static w-fit min-w-[350px] lg:max-w-[550px]">
      {props.links.pdf ? (
        <NavLink to={props.id}>{linkContent}</NavLink>
      ) : (
        linkContent
      )}
      {props.award &&
        props.award.map((a) => (
          <span className="ml-1 pl-6 text-base text-themeMint flex flex-row items-center">
            {icons.ribbon}
            {a}
          </span>
        ))}
    </span>
  );
  return <HoverItem innerContent={innerContent} thumb={props.thumb} />;
};
