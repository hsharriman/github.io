import React from "react";
import aboutMD from "../assets/about.md";
import { ClrChangeLetter, HeaderType } from "../components/ClrChangeLetter";
import { Header } from "../components/Header";
import { ProjectItem } from "../components/ProjectItem";
import { Publication } from "../components/Publication";
import { SparkleBackground } from "../components/SparkleBackground";
import { SparkleLink, SparkleLinkProps } from "../components/SparkleLink";
import { StyledMarkdown } from "../components/StyledMarkdown";
import {
  backgroundCSS,
  pageMarginCSS,
  projects,
  publications,
} from "../utils/consts";
import {
  initRandomClrArr,
  numCharsInArr,
  randomSparkleCallback,
} from "../utils/random";

interface HomeState {
  active: boolean[];
  activeSubLtr: boolean[];
}

const H1LETTERS = ["HWEI", "-SHIN", "HARR-", "IMAN"];
const subsectionHeaderCss =
  "font-ibmMono text-xl sm:text-xl md:text-3xl py-4 flex flex-row items-center gap-4 mt-20 ";

export class Home extends React.Component<{}, HomeState> {
  private numSubHeaderLetters = 0;
  private numLetters: number;
  private clrs: string[];
  private subClrs: string[];
  private publicationsRef: React.RefObject<HTMLDivElement>;
  private projectsRef: React.RefObject<HTMLDivElement>;
  private aboutRef: React.RefObject<HTMLDivElement>;
  private contactRef: React.RefObject<HTMLDivElement>;
  private linkArr: SparkleLinkProps[] = [
    {
      // ABOUT
      link: "/",
      scrollTo: () =>
        this.aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      text: "About Me",
      color: "blue",
      top: "top-[10rem]",
      left: "-left-[6rem] -md:left-[3rem]",
      textSize: "lg:text-2xl",
    },
    {
      // CV
      link: "/cv",
      text: "CV",
      color: "red",
      top: "top-[32rem]",
      left: "-left-[12rem] -md:left-[14rem]",
      textSize: "lg:text-5xl",
    },
    {
      // PUBLICATIONS
      link: "/publications",
      scrollTo: () =>
        this.publicationsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      text: "Publications",
      color: "purple",
      top: "top-[20rem]",
      left: "-left-[8rem] -md:left-[11rem]",
      textSize: "lg:text-5xl",
    },
    {
      // PROJECTS
      link: "/",
      scrollTo: () =>
        this.projectsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      text: "Featured Projects",
      color: "pink",
      top: "top-[3rem]",
      left: "-left-[15rem] -md:left-[16rem]",
      textSize: "lg:text-3xl",
    },
    {
      // ILLUSTRATIONS
      link: "/illustrations",
      text: "Illustrations",
      color: "blue",
      top: "top-[27rem]",
      left: "left-[5rem] -md:left-[10rem]",
      textSize: "lg:text-xl",
    },
    {
      // CONTACT
      link: "/",
      scrollTo: () =>
        this.contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      text: "Contact",
      color: "mint",
      top: "top-[37rem]",
      left: "left-[8rem] md:left-[0rem]",
      textSize: "lg:text-2xl",
    },
  ];

  constructor(props: {}) {
    super(props);
    this.numLetters = numCharsInArr(H1LETTERS);
    this.state = {
      active: new Array(this.numLetters).fill(false),
      activeSubLtr: new Array(this.numSubHeaderLetters).fill(false),
    };
    this.clrs = initRandomClrArr(this.numLetters);
    this.subClrs = initRandomClrArr(this.numSubHeaderLetters);
    this.publicationsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    randomSparkleCallback(
      this.numLetters,
      this.state.active,
      (newState: boolean[]) => {
        this.setState({ active: newState });
      }
    );
    randomSparkleCallback(
      this.numSubHeaderLetters,
      this.state.activeSubLtr,
      (newState: boolean[]) => {
        this.setState({ activeSubLtr: newState });
      }
    );
  }

  sectionHeader = (text: string, idx: number = 0) => {
    return (
      <div className="mb-4 mt-8">
        {Array.from(text).map((letter, i) => {
          const currIdx = idx + i;
          return (
            <ClrChangeLetter
              letter={letter}
              defaultClr="text-white"
              activeColor={this.subClrs[currIdx]}
              type={HeaderType.H3}
              isActive={this.state.activeSubLtr[currIdx]}
            />
          );
        })}
      </div>
    );
  };

  aboutSection = () => {
    return (
      <>
        <div id="about" className="w-full" ref={this.aboutRef}>
          <div className="text-white font-notoSans text-l">
            <div className={subsectionHeaderCss + "text-themeBlue"}>
              <img src="/cursors/pt2blue.gif" className="h-6" />
              Hi, I'm Hwei-Shin (sounds like "way-sheen")
            </div>
            <div className="max-w-screen-md">
              <StyledMarkdown mdFile={aboutMD} />
            </div>
          </div>
          <div>
            {/* <img
              src="/portrait.jpg"
              className="w-48 dashed border-themeBlue border-2 rounded-md"
            /> */}
          </div>
        </div>
      </>
    );
  };

  publications = () => {
    return publications.map((p) => <Publication {...p} />);
  };

  footer = () => {
    const decorationCls =
      "underline decoration-solid decoration-themeMint underline-offset-4 decoration-2";
    const separator = <span>&nbsp; // &nbsp;</span>;
    return (
      <div
        id="contact"
        ref={this.contactRef}
        className="w-full grid grid-rows-2 justify-center font-mono text-themeMint text-md mt-8 pb-8 sm:pb-8 md:pb-20 gap-4"
      >
        <div className="flex justify-center text-center flex-wrap">
          <a
            href="mailto:hwei-shin.harriman@gmail.com"
            className={decorationCls}
          >
            E-Mail
          </a>
          {separator}
          <a
            href="https://www.linkedin.com/in/hsharriman"
            className={decorationCls}
          >
            LinkedIn
          </a>
          {separator}
          <a href="https://github.com/hsharriman" className={decorationCls}>
            Github
          </a>
          {separator}
          <a href="https://twitter.com/wayshiz1" className={decorationCls}>
            Twitter
          </a>
          {separator}
          <a
            href="https://orcid.org/0000-0002-3746-4808"
            className={decorationCls}
          >
            ORCID
          </a>
        </div>
        <div className="flex justify-center text-center text-sm md:text-md">
          <div className="text-themeBlue">
            Copyright Hwei-Shin Harriman, 2024. Portfolio designed and coded by
            yours truly.
          </div>
        </div>
      </div>
    );
  };

  render() {
    let i = 0;
    const h1Letters = (
      <div className="md:grid md:grid-rows-4 md:grid-cols-1">
        {H1LETTERS.map((substr) => {
          return (
            <div className="row-span-1 whitespace-nowrap">
              {Array.from(substr).map((letter) => {
                i += 1;
                return (
                  <ClrChangeLetter
                    letter={letter}
                    defaultClr="text-white"
                    activeColor={this.clrs[i]}
                    type={HeaderType.H1}
                    isActive={this.state.active[i]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );

    return (
      <div className={backgroundCSS + "static"}>
        <Header />
        <SparkleBackground />
        <div className={pageMarginCSS + "relative"}>
          <div className="-ml-4 flex justify-center w-screen h-screen items-center lg:justify-start">
            <div className="flex lg:justify-start justify-center w-screen h-screen items-center flex-row flex-wrap lg:gap-[5svw] xl:gap-48 lg:grid lg:grid-flow-col lg:pt-12 lg:h-fit ">
              <div className="w-fit" key="homepg-text">
                <div className="w-fit h-auto">{h1Letters}</div>
              </div>
              <div
                className="grid grid-flow-row gap-1 lg:h-full lg:relative"
                key="link-container"
              >
                {this.linkArr.map((link) => (
                  <SparkleLink {...link} />
                ))}
              </div>
            </div>
          </div>
          {this.aboutSection()}
          <div ref={this.publicationsRef}>
            <div className={subsectionHeaderCss + "text-themePurple"}>
              <img src="/cursors/pt2purple.gif" className="h-6" />
              Publications ---
            </div>
            <div className="grid grid-flow-row xl:grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-3 xl:gap-3">
              {this.publications()}
            </div>
          </div>
          <div ref={this.projectsRef}>
            <div className={subsectionHeaderCss + "text-themePink"}>
              <img src="/cursors/pt2pink.gif" className="h-6" />
              Featured Projects ---
            </div>
          </div>
          <div>
            <div className="grid grid-flow-row xl:grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-3 xl:gap-3">
              {projects.map((p) => (
                <ProjectItem {...p} />
              ))}
            </div>
          </div>
          {this.footer()}
        </div>
      </div>
    );
  }
}
