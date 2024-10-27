import React from "react";
import { HeaderType } from "../components/ClrChangeLetter";
import { Header } from "../components/Header";
import { Publication } from "../components/Publication";
import { SparkleLetters } from "../components/SparkleLetters";
import { backgroundCSS, pageMarginCSS, publications } from "../utils/consts";

export class Publications extends React.Component {
  render() {
    return (
      <div className={backgroundCSS}>
        <Header showName={true} />
        <div
          className={
            pageMarginCSS +
            "pt-24 pb-8 w-screen h-full grid grid-cols-2 grid-rows-1"
          }
        >
          <div>
            <div className={"pb-3"}>
              <SparkleLetters
                text={["Publications_"]}
                prefix="title"
                type={HeaderType.H3}
                defaultClr="text-white"
              />
            </div>
            <div className={""}>
              {publications.map((p) => (
                <Publication {...p} />
              ))}
            </div>
          </div>
          <div className="bg-red-700">{"innerContent"}</div>
        </div>
      </div>
    );
  }
}
