import React from "react";

export interface MarkdownLoaderProps {
  mdFile: RequestInfo;
}
interface MarkdownLoaderState {
  md: string | null;
}
export class MarkdownLoader extends React.Component<
  MarkdownLoaderProps,
  MarkdownLoaderState
> {
  constructor(props: MarkdownLoaderProps) {
    super(props);
    this.state = {
      md: null,
    };
  }

  componentDidMount() {
    fetch(this.props.mdFile)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ md: text });
      });
  }
}
