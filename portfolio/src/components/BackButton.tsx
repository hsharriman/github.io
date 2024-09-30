import { NavLink } from "react-router-dom";

export const BackButton = () => {
  return (
    <NavLink
      to="/"
      className={"font-ibmMono text-themeMint grid grid-cols-2 m-2 w-12"}
    >
      <div className="h-full flex align-middle col-span-1 items-center">
        <img src="/cursors/backs.gif" className="h-4 w-auto pr-2" />
      </div>
      <span className="col-span-1">back</span>
    </NavLink>
  );
};
