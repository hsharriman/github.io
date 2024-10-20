import React from "react";
import aboutMD from "../assets/about.md";
import { About } from "../components/About";
import { ClrChangeLetter, HeaderType } from "../components/ClrChangeLetter";
import { Header } from "../components/Header";
import { Publication } from "../components/Publication";
import { SparkleLink, SparkleLinkProps } from "../components/SparkleLink";
import { backgroundCSS, pageMarginCSS, publications } from "../utils/consts";
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
const H2LETTERS = ["Software", "Engineer", "//", "Ph.D.", "Student"];
const SECTIONHEADERS = ["ABOUT_", "PUBLICATIONS_", "PROJECTS_"];
const LINKARR: SparkleLinkProps[] = [
  {
    link: "/",
    text: "Featured Projects",
    color: "pink",
    top: "top-12",
    left: "-left-12",
  },
  {
    link: "/publications",
    text: "Publications",
    color: "blue",
    top: "top-1/2",
    left: "left-48",
  },
  {
    link: "/cv",
    text: "Resume",
    color: "red",
    top: "top-1/3",
    left: "left-1/2",
  },
  {
    link: "/",
    text: "Contact",
    color: "mint",
    top: "bottom-64",
    left: "-left-24",
  },
  { link: "/", text: "About", color: "purple", top: "top-48", left: "left-6" },
  {
    link: "/illustrations",
    text: "Illustration Gallery",
    color: "purple",
    top: "bottom-24",
    left: "left-6",
  },
];
export class Home extends React.Component<{}, HomeState> {
  private numSubHeaderLetters = 0;
  private numLetters: number;
  private clrs: string[];
  private subClrs: string[];
  constructor(props: {}) {
    super(props);
    this.numLetters = numCharsInArr(H1LETTERS.concat(H2LETTERS));
    this.numSubHeaderLetters = numCharsInArr(SECTIONHEADERS);
    this.state = {
      active: new Array(this.numLetters).fill(false),
      activeSubLtr: new Array(this.numSubHeaderLetters).fill(false),
    };
    this.clrs = initRandomClrArr(this.numLetters);
    this.subClrs = initRandomClrArr(this.numSubHeaderLetters);
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
        <div id="about" className="w-full grid grid-cols-2">
          <div className="col-span-1 text-white font-notoSans text-l">
            <div className="font-ibmMono text-themeBlue text-2xl py-4 flex flex-row items-center gap-4">
              <img src="/cursors/pt2blue.gif" className="h-6" />
              Hi, I'm Hwei-Shin (sounds like "Way-Sheen").
            </div>
            <About mdFile={aboutMD} />
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
        className="w-full grid grid-rows-2 justify-center font-mono text-themeMint text-md mt-8"
      >
        <div className="flex justify-center text-center">
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
        <div className="flex justify-center text-center">
          <div className="text-themeBlue">
            Copyright Hwei-Shin Harriman, 2024.
            <span className="secondlinebreak">
              <br />
            </span>
            Portfolio designed and coded by yours truly.
          </div>
        </div>
      </div>
    );
  };

  render() {
    let i = 0;
    const h1Letters = (
      <div className="grid grid-rows-4 grid-cols-1">
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

    const h2Letters = H2LETTERS.map((substr) => {
      return (
        <div className="row-span-1">
          {Array.from(substr)
            .map((letter) => {
              i += 1;
              return (
                <ClrChangeLetter
                  letter={letter}
                  defaultClr="text-themeBlue"
                  activeColor={this.clrs[i]}
                  type={HeaderType.H2}
                  isActive={this.state.active[i]}
                />
              );
            })
            .concat(
              <span className="text-[50px] leading-10">&nbsp;&nbsp;</span>
            )}
        </div>
      );
    });
    let j = 0;
    const [aboutHeader, pubHeader, projHeader] = SECTIONHEADERS.map((str) => {
      const newIdx = j;
      j += str.length;
      return this.sectionHeader(str, newIdx);
    });
    return (
      <div className={backgroundCSS}>
        <Header />
        <div className={pageMarginCSS}>
          <div className="grid grid-cols-12 pt-12 grid-rows-1 h-screen">
            <div className="col-span-7" key="homepg-text">
              <div className="h-auto w-3/4">{h1Letters}</div>
              <div className=" flex flex-wrap flex-row">{h2Letters}</div>
            </div>
            <div className="col-span-5 relative" key="link-container">
              {LINKARR.map((link) => (
                <SparkleLink {...link} />
              ))}
            </div>
          </div>
          {aboutHeader}
          {this.aboutSection()}
          {pubHeader}
          {this.publications()}
          {projHeader}
          {this.footer()}
        </div>
      </div>
    );
  }
}
