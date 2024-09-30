import React from "react";
import {
  hoverTextClr,
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
    link: "",
    text: "Featured Projects",
    color: "pink",
    top: "top-12",
    left: "-left-12",
  },
  {
    link: "",
    text: "Publications",
    color: "blue",
    top: "top-1/2",
    left: "left-48",
  },
  { link: "", text: "Resume", color: "red", top: "top-1/3", left: "left-1/2" },
  {
    link: "",
    text: "Contact",
    color: "mint",
    top: "bottom-64",
    left: "-left-24",
  },
  { link: "", text: "About", color: "purple", top: "top-48", left: "left-6" },
  {
    link: "",
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

  header = () => {
    return (
      <div className="fixed top-0 left-0 z-10 w-screen h-20 pt-2 pl-2 bg-gradient-to-t from-transparent to-themeBackgroundBlue">
        <img src={"/loading.gif"} alt="favicon" className="w-16 h-16" />
      </div>
    );
  };

  sectionHeader = (text: string, idx: number = 0) => {
    return (
      <div className="my-4">
        {Array.from(text).map((letter, i) => {
          const currIdx = idx + i;
          return (
            <ClrChangeLetter
              letter={letter}
              defaultClr="text-white"
              activeColor={this.subClrs[currIdx]}
              id={this.numLetters + currIdx}
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
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className="text-themeMint font-ibmMono text-2xl">
              <p>
                I am a 2nd year Ph.D. student in Software Engineering at
                Carnegie Mellon University, advised by Dominik Moritz and Joshua
                Sunshine. My experience is primarily in full stack engineering,
                data analysis, and human-computer interaction. I am passionate
                about making hard problems easier to
              </p>
              <p>
                I am currently working on a project that aims to improve the
                performance of machine learning models by leveraging
                domain-specific knowledge. I am also working on a project that
                aims to improve the performance of machine learning models by
                leveraging domain-specific knowledge.
              </p>
            </div>
          </div>
        </div>
      </>
    );
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
                    id={i}
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
                  id={i}
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
      <>
        {this.header()}
        <div className="ml-16 mr-8">
          <div className="grid grid-cols-12 grid-rows-1 pt-12 h-screen">
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
          {projHeader}
          {this.footer()}
        </div>
      </>
    );
  }
}

export interface ClrChangeLetterProps {
  letter: string;
  defaultClr: string;
  activeColor: string;
  isActive: boolean;
  id: number;
  type: HeaderType;
}
export enum HeaderType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}
export const ClrChangeLetter = (props: ClrChangeLetterProps) => {
  let baseCls = `font-ibmMono hover:${props.activeColor} hover:ease-out hover:duration-500 `;
  switch (props.type) {
    case HeaderType.H1:
      baseCls += `text-[160px] tracking-[2rem] leading-[11rem] `;
      break;
    case HeaderType.H2:
      baseCls += `text-3xl leading-4 `;
      break;
    case HeaderType.H3:
      baseCls += `text-5xl uppercase tracking-[1rem] `;
      break;
    default:
      break;
  }
  baseCls += props.isActive
    ? props.activeColor
    : `${props.defaultClr} ease-out duration-500`;
  return (
    <span className={baseCls} id={`cl-${props.id}`}>
      {props.letter}
    </span>
  );
};

export interface SparkleLinkProps {
  text: string;
  link: string;
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
  return (
    <div
      className={`absolute ${props.top} ${props.left} text-themeDarkBlue font-ibmMono flex flex-row text-3xl align-text-bottom ${hoverColor} sparklelink flex justify-between gap-5`}
      // onClick={}
    >
      {gif}
      {props.text}
      {gif}
    </div>
  );
};
