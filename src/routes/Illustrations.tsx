import React from "react";
import { HeaderType } from "../components/ClrChangeLetter";
import { Header } from "../components/Header";
import { SparkleLetters } from "../components/SparkleLetters";
import { SparkleLineBreak } from "../components/SparkleLineBreak";
import { backgroundCSS, pageMarginCSS } from "../utils/consts";

const imgs = [
  "line2.png",
  "line1.png",
  "line3.png",
  "line4.png",
  "12.png",
  "17.png",
  "astronautdarkback.png",
  "ow1.png",
  "ow2.png",
  "ow3.png",
  "ow4.png",
];
export class Illustrations extends React.Component {
  render() {
    return (
      <div className={backgroundCSS}>
        <Header showName={false} />
        <div className={pageMarginCSS + "pt-16 lg:max-2xl:pt-24"}>
          <div className="pb-8">
            <div className="flex flex-row items-bottom gap-4">
              <SparkleLetters
                text={["Illustration_Gallery_"]}
                prefix="title"
                type={HeaderType.H3}
                defaultClr="text-white"
              />
            </div>
            <p className="text-themeBlue pt-4 text-xl">
              A collection of my digital art. Created with Photoshop or
              Procreate!
            </p>
          </div>
          <SparkleLineBreak />
          <div className="flex flex-wrap gap-4">
            {imgs.map((img) => (
              <img
                src={`/illustration/${img}`}
                alt={img}
                className="h-full max-h-screen my-2"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
