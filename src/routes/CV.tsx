import Markdown from "react-markdown";
import { MarkdownLoader } from "../components/MarkdownLoader";

export class MarkdownCV extends MarkdownLoader {
  render() {
    return (
      <div className="bg-slate-100 w-full h-full min-h-screen flex justify-center py-10 sm:py-10 md:py-20">
        <div className="h-3 w-full bg-themePurple absolute top-0 left-0"></div>
        <div className={`w-full px-2 lg:w-8/12 md:w-10/12 sm:w-full sm:px-2`}>
          <Markdown
            components={{
              h1(props) {
                const { node, ...rest } = props;
                return (
                  <h1
                    className="text-2xl sm:text-sm md:text-4xl font-semibold text-slate-800 pb-4"
                    {...rest}
                  />
                );
              },
              h2(props) {
                const { node, ...rest } = props;
                return (
                  <h2
                    className="text-lg font-semibold text-slate-500 pb-2 sm:text-sm md:text-2xl"
                    {...rest}
                  />
                );
              },
              a(props) {
                const { node, ...rest } = props;
                return (
                  <a
                    className="text-sm text-themeBlue border-none hover:underline sm:text-sm md:text-base"
                    {...rest}
                  />
                );
              },
              p(props) {
                const { node, ...rest } = props;
                return (
                  <p
                    className="text-sm text-slate-800 pb-2 sm:text-sm md:text-base"
                    {...rest}
                  />
                );
              },
              code(props) {
                const { node, ...rest } = props;
                return (
                  <code
                    className="text-end text-slate-500 font-notoSans inline-flex text-sm"
                    {...rest}
                  />
                );
              },
              h4(props) {
                const { node, ...rest } = props;
                return (
                  <h4
                    className="flex justify-between text-slate-800 pb-0 items-baseline text-sm sm:text-sm md:text-base"
                    {...rest}
                  />
                );
              },
              h5(props) {
                const { node, ...rest } = props;
                return <h5 className="text-themePurpleLight pb-3" {...rest} />;
              },
              strong(props) {
                const { node, ...rest } = props;
                return (
                  <strong className="text-slate-800 font-semibold" {...rest} />
                );
              },
              hr(props) {
                const { node, ...rest } = props;
                return <hr className="border-slate-300 mb-6 mt-3" {...rest} />;
              },
              img(props) {
                const { node, ...rest } = props;
                return (
                  <img
                    className="inline-flex self-start items-start"
                    {...rest}
                  />
                );
              },
              li(props) {
                const { node, ...rest } = props;
                return (
                  <li
                    className="text-sm text-slate-800 pb-2 sm:text-sm md:text-base"
                    {...rest}
                  />
                );
              },
            }}
          >
            {this.state.md}
          </Markdown>
        </div>
      </div>
    );
  }
}
