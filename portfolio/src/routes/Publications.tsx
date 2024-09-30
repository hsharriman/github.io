import React from "react";
import { HeaderType } from "../components/ClrChangeLetter";
import { Header } from "../components/Header";
import { SparkleLetters } from "../components/SparkleLetters";
import { backgroundCSS, pageMarginCSS } from "../utils/consts";

export class Publications extends React.Component {
  render() {
    return (
      <div className={backgroundCSS}>
        <Header showName={true} />
        <div className={pageMarginCSS + "pt-24"}>
          <SparkleLetters
            text={["Publications_"]}
            prefix="title"
            type={HeaderType.H3}
            defaultClr="text-white"
          />
        </div>
      </div>
    );
  }
}
