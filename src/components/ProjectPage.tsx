import React from "react";
import {
  backgroundCSS,
  defaultIconTextCss,
  pageMarginCSS,
} from "../utils/consts";
import { HeaderType } from "./ClrChangeLetter";
import { Header } from "./Header";
import { ProjectItemProps } from "./ProjectItem";
import { SparkleLetters } from "./SparkleLetters";
import { SparkleLineBreak } from "./SparkleLineBreak";
import { StyledMarkdown } from "./StyledMarkdown";

export class ProjectPage extends React.Component<ProjectItemProps> {
  constructor(props: ProjectItemProps) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const keywords = (
      <span
        className={`font-notoSans whitespace-nowrap text-themeBlue text-lg italic`}
      >
        {this.props.topic},&nbsp;{this.props.year}
      </span>
    );
    return (
      <div className={backgroundCSS}>
        <Header showName={false} />
        <div
          className={
            "pt-16 sm:pt-16 md:pt-24 pb-8 w-screen flex h-full justify-center"
          }
        >
          <div className={pageMarginCSS + "max-w-screen-md"}>
            <div className={"pb-1"}>
              <SparkleLetters
                text={[this.props.title]}
                prefix="title"
                type={HeaderType.H5}
                defaultClr="text-white"
              />
            </div>
            {keywords}
            <SparkleLineBreak />
            {this.props.github && (
              <div className="flex flex-row gap-4">
                <div className="text-lg text-white font-ibmMono">
                  Project Link:
                </div>
                <div className="text-lg">
                  <a
                    href={this.props.github}
                    target="_blank"
                    className={defaultIconTextCss}
                  >
                    <img
                      src="/cv-svgs/github.svg"
                      className="w-auto h-6 fill-themeBlue stroke-themeBlue mr-2"
                    />
                    {"Github"}
                  </a>
                </div>
              </div>
            )}
            {this.props.md && (
              <div className="pt-4">
                <StyledMarkdown mdFile={this.props.md} />
              </div>
            )}
            {this.props.imgs &&
              this.props.imgs.map((img) => (
                <div className="my-2 rounded-md overflow-hidden">
                  <img src={img} className="w-fit" />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
