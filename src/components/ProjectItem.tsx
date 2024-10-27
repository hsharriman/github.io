import React from "react";
import { NavLink } from "react-router-dom";
import { HoverItem } from "./HoverItem";

export interface ProjectItemProps {
  title: string;
  color: string;
  year: string;
  topic: string;
  thumb: string;
  link: string;
  github?: string;
  imgs?: string[]; // maybe not needed?
  md?: string;
}

export class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const innerContent = (
      <span className="flex flex-col pb-4 proj transition-all duration-500">
        <NavLink className="" to={this.props.link}>
          <div className="flex flex-row items-center gap-3">
            <img src={`/cursors/pt1${this.props.color}.gif`} className="h-4" />
            <div className="text-white font-ibmMono text-base lg:max-2xl:text-xl">
              {this.props.title}
            </div>
          </div>
          <div className="ml-1 pl-6 text-themeBlue text-base lg:max-2xl:text-lg font-bold">
            {this.props.topic}
          </div>
          <div className="ml-1 pl-6 text-themeBlue text-base lg:max-2xl:text-lg font-bold">
            {this.props.year}
          </div>
        </NavLink>
      </span>
    );
    return <HoverItem innerContent={innerContent} thumb={this.props.thumb} />;
  }
}
