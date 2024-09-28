import React from "react";
import { randomColor } from "../utils/random";

interface HomeState {
  active: boolean[];
}
export class Home extends React.Component<{}, HomeState> {
  private h1Letters = ["HWEI", "-SHIN", "HARR-", "IMAN"];
  private h2Letters = ["Software", "Engineer", "//", "Ph.D.", "Student"];
  private numLetters: number;
  private clrs: string[];
  constructor(props: {}) {
    super(props);
    this.numLetters = this.h1Letters
      .concat(this.h2Letters)
      .reduce((prev, curr) => {
        return prev + curr.length;
      }, 0);
    this.state = {
      active: new Array(this.numLetters).fill(false),
    };
    this.clrs = new Array(this.numLetters).fill("").map(() => randomColor());
  }
  componentDidMount() {
    setInterval(() => {
      // reset old active letter
      const last = this.state.active;
      const idx = Math.floor(Math.random() * this.numLetters);
      last[idx] = true;
      // set new active
      this.setState({ active: last });
      setTimeout(() => {
        // reset the active letter
        last[idx] = false;
        this.setState({ active: last });
      }, 1000);
    }, 300);
  }

  header = () => {
    return (
      <div className="fixed top-0 left-0 z-10 w-screen h-20 pt-2 pl-2 bg-gradient-to-t from-transparent to-themeBackgroundBlue">
        <img src={"/loading.gif"} alt="favicon" className="w-16 h-16" />
      </div>
    );
  };

  render() {
    let i = 0;
    const h1Letters = (
      <div className="grid grid-rows-4 grid-cols-1">
        {this.h1Letters.map((substr) => {
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
                    style="h1"
                    isActive={this.state.active[i]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );

    const h2Letters = this.h2Letters.map((substr) => {
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
                  style="h2"
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
    return (
      <>
        {this.header()}
        <div className="grid grid-cols-12 grid-rows-1 mt-12">
          <div className="col-span-7" key="homepg-text">
            <div className="h-auto w-3/4 ml-28">{h1Letters}</div>
            <div className=" flex flex-wrap flex-row ml-28">{h2Letters}</div>
          </div>
          <div className="col-span-5 relative" key="link-container">
            <SparkleLink
              link=""
              text="Engineering Projects"
              color="pink"
              top="top-10"
              left="-left-12"
            />
            <SparkleLink
              link=""
              text="Publications"
              color="blue"
              top=""
              left=""
            />
            <SparkleLink
              link=""
              text="Resume"
              color="red"
              top="top-1/4"
              left="left-1/2"
            />
            <SparkleLink
              link=""
              text="Contact"
              color="mint"
              top="top-"
              left=""
            />
            <SparkleLink link="" text="About" color="purple" top="" left="" />
          </div>
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
  style: string;
}
export const ClrChangeLetter = (props: ClrChangeLetterProps) => {
  let baseCls =
    props.style === "h1"
      ? `text-[160px] tracking-[2rem] leading-[11rem] font-ibmMono hover:${props.activeColor} hover:ease-out hover:duration-500 `
      : `text-3xl leading-4 font-ibmMono hover:${props.activeColor} hover:ease-out hover:duration-500 `;
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
  const getTextClr = (clr: string) => {
    switch (clr) {
      case "blue":
        return "hover:text-themeBlue";
      case "mint":
        return "hover:text-themeMint";
      case "purple":
        return "hover:text-themePurple";
      case "red":
        return "hover:text-themeRed";
      case "pink":
        return "hover:text-themePink";
      default:
        return "hover:text-white";
    }
  };

  const hoverColor = getTextClr(props.color);
  return (
    <div
      className={`absolute ${props.top} ${props.left} text-themeDarkBlue font-mono flex flex-row text-3xl align-text-bottom ${hoverColor} sparklelink`}
      // onClick={}
    >
      <img
        className="w-8 h-8 mr-5"
        src={`/cursors/pt2${props.color.toLowerCase()}.gif`}
        alt=""
      />
      {props.text}
    </div>
  );
};
