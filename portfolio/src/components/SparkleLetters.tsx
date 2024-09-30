import React from "react";
import {
  initRandomClrArr,
  numCharsInArr,
  randomSparkleCallback,
} from "../utils/random";
import { ClrChangeLetter, HeaderType } from "./ClrChangeLetter";

export interface SparkleLettersProps {
  text: string[];
  prefix: string;
  type: HeaderType;
  defaultClr: string;
  separator?: JSX.Element;
}
interface SparkleLettersState {
  active: boolean[];
}
export class SparkleLetters extends React.Component<
  SparkleLettersProps,
  SparkleLettersState
> {
  private numLetters: number;
  private clrs: string[];
  constructor(props: SparkleLettersProps) {
    super(props);
    this.numLetters = numCharsInArr(props.text);
    this.clrs = initRandomClrArr(this.numLetters);
    this.state = {
      active: new Array(this.numLetters).fill(false),
    };
  }

  componentDidMount() {
    randomSparkleCallback(
      this.numLetters,
      this.state.active,
      (newState: boolean[]) => {
        this.setState({ active: newState });
      }
    );
  }

  render() {
    let i = 0;
    const letters = this.props.text.map((substr) => {
      const s = Array.from(substr).map((letter) => {
        i += 1;
        return (
          <ClrChangeLetter
            letter={letter}
            defaultClr={this.props.defaultClr}
            activeColor={this.clrs[i]}
            type={this.props.type}
            isActive={this.state.active[i]}
          />
        );
      });
      return this.props.separator ? s.concat(this.props.separator) : s;
    });
    return <div>{letters}</div>;
  }
}
