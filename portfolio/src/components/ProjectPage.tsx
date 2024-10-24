import React from "react";
import { HeaderType } from "./ClrChangeLetter";
import { Header } from "./Header";
import { ProjectItemProps } from "./ProjectItem";
import { SparkleLetters } from "./SparkleLetters";

export class ProjectPage extends React.Component<ProjectItemProps> {
  render() {
    return (
      <div className="bg-themeBlack">
        <Header showName={true} />
        <div className="pt-24 pb-8 w-screen h-full grid grid-cols-2 grid-rows-1">
          <div>
            <div className="pb-3">
              <SparkleLetters
                text={["Projects_"]}
                prefix="title"
                type={HeaderType.H3}
                defaultClr="text-white"
              />
            </div>
          </div>
          <div className="bg-red-700">{"innerContent"}</div>
        </div>
      </div>
    );
  }
}
