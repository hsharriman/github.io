import React from "react";
import { randomSparkleCallback } from "../utils/random";

interface SparkleBackgroundState {
  active: boolean[];
}
export class SparkleBackground extends React.Component<
  {},
  SparkleBackgroundState
> {
  private maxActive = 400;
  private colors = ["blue"];
  private widths = new Array(this.maxActive).map(() =>
    randomPick([4, 5, 6, 2, 10].map((n) => `w-${n} h-${n}`))
  );
  private pts = new Array(this.maxActive).fill("");

  constructor(props: any) {
    super(props);
    this.state = {
      active: new Array(this.maxActive).fill(false),
    };
    this.pts = this.pts.map(() => {
      const clr = this.colors[Math.floor(Math.random() * this.colors.length)];
      return `cursors/pt${Math.random() < 0.5 ? 1 : 2}${clr}.gif`;
    });
  }

  componentDidMount() {
    randomSparkleCallback(
      this.maxActive,
      this.state.active,
      (newState: boolean[]) => {
        this.setState({ active: newState });
      }
    );
  }
  render() {
    return (
      <div className="fixed top-0 left-0">
        <div className="w-screen h-screen flex flex-row flex-wrap gap-4 items-stretch content-around">
          {this.state.active.map((active, i) => {
            const visible = active ? "opacity-40" : "opacity-0";
            return (
              <div
                className={`${this.widths[i]} ${visible} ease-out duration-700 transition-all`}
              >
                <img src={this.pts[i]} className={`h-auto select-none`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const randomPick = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
