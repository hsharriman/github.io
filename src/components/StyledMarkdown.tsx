import Markdown from "react-markdown";
import { MarkdownLoader } from "./MarkdownLoader";

export class StyledMarkdown extends MarkdownLoader {
  render() {
    return (
      <Markdown
        components={{
          a(props) {
            const { node, ...rest } = props;
            return (
              <a
                className="text-base decoration-transparent border-none text-themeMint font-ibmMono hover:text-white px-1"
                {...rest}
              />
            );
          },
          p(props) {
            const { node, ...rest } = props;
            return (
              <p
                className="text-base text-white pb-2 font-notoSans"
                {...rest}
              />
            );
          },
          ul(props) {
            const { node, ...rest } = props;
            return (
              <ul
                className="purpleSparklePt text-base text-white pb-2 font-notoSans pl-4"
                {...rest}
              />
            );
          },
        }}
      >
        {this.state.md}
      </Markdown>
    );
  }
}
