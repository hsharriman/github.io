import React from "react";
import { icons } from "../assets/icons";
import { backgroundCSS, pageMarginCSS } from "../utils/consts";
import { HeaderType } from "./ClrChangeLetter";
import { Header } from "./Header";
import { PublicationProps } from "./Publication";
import { PublicationLinks } from "./PublicationLinks";
import { SparkleLetters } from "./SparkleLetters";
import { SparkleLineBreak } from "./SparkleLineBreak";

export class PublicationPage extends React.Component<PublicationProps> {
  constructor(props: PublicationProps) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const subheaderCss = "pb-1 text-xl font-ibmMono text-themePurpleLight";
    const authors = this.props.authors.map((author, idx) => (
      <span
        className={`font-notoSans whitespace-nowrap text-themePink text-md sm:text-md md:max-xl:text-xl ${
          author.includes("Harriman") ? "font-bold" : ""
        }`}
      >
        {author}
        {idx === this.props.authors.length - 1 ? "." : ","}
        &nbsp;
      </span>
    ));

    const keywords = this.props.keywords?.map((keyword, idx) => (
      <span className={`font-notoSans whitespace-nowrap`}>
        {keyword}
        {this.props.keywords && idx === this.props.keywords.length - 1
          ? "."
          : ","}
        &nbsp;
      </span>
    ));
    return (
      <div className={backgroundCSS}>
        <Header showName={false} />
        <div
          className={
            "pt-16 sm:pt-16 md:max-2xl:pt-24 pb-8 w-screen flex h-full justify-center"
          }
        >
          <div className={pageMarginCSS + "max-w-screen-md"}>
            <div className={"pb-3"}>
              <SparkleLetters
                text={[this.props.title]}
                prefix="title"
                type={HeaderType.H5}
                defaultClr="text-white"
              />
            </div>
            <div className="flex flex-wrap break-words">{authors}</div>
            <div className=" text-themeMint text-md sm:text-md md:max-xl:text-xl flex flex-row flex-wrap break-words">
              {this.props.award &&
                this.props.award.map((a) => (
                  <span className="flex flex-row items-center mr-2">
                    {icons.ribbon}
                    {a},
                  </span>
                ))}
              <span className="italic">{this.props.venue}.</span>
            </div>
            <SparkleLineBreak />
            {this.props.teaser && (
              <div className="my-2">
                <img
                  src={this.props.teaser.img}
                  className="w-fit rounded-md overflow-hidden"
                />
                <div className="text-white italic">
                  {this.props.teaser.caption}
                </div>
              </div>
            )}
            {/* {this.props.keywords && (
              <div className="pt-2 text-themeBlue">
                <div className={subheaderCss}>Keywords:</div>
                {keywords}
              </div>
            )} */}
            {this.props.abstract && (
              <div className="text-white py-4">
                <div className={subheaderCss}>Abstract:</div>
                <div className="text-white">{this.props.abstract}</div>
              </div>
            )}
            {this.props.links && (
              <div>
                <div className={subheaderCss}>Links:</div>
                <div className="text-lg">
                  <PublicationLinks {...this.props.links} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
