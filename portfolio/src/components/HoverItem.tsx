export const HoverItem = (props: {
  innerContent: JSX.Element;
  thumb?: string;
}) => {
  return (
    <div className="pb-4 proj transition-all duration-500 w-fit min-w-[350px] max-w-[700px] relative">
      {props.innerContent}
      {props.thumb && (
        <div className="thumb absolute opacity-50 -top-10 -right-20 -z-10 transition-all duration-500 rounded-md overflow-hidden">
          <img src={props.thumb} className="w-auto h-[150px] opacity-50"></img>
        </div>
      )}
    </div>
  );
};
