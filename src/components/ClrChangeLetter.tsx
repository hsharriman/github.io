export interface ClrChangeLetterProps {
  letter: string;
  defaultClr: string;
  activeColor: string;
  isActive: boolean;
  type: HeaderType;
}
export enum HeaderType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}
export const ClrChangeLetter = (props: ClrChangeLetterProps) => {
  let baseCls = `font-ibmMono hover:${props.activeColor} hover:ease-out hover:duration-500 `;
  switch (props.type) {
    case HeaderType.H1:
      baseCls += `text-8xl tracking-widest leading-12 lg:max-2xl:text-[160px] lg:max-2xl:tracking-[2rem] lg:max-2xl:leading-[11rem] `;
      break;
    case HeaderType.H2:
      baseCls += `hidden lg:max-2xl:inline lg:max-2xl:text-3xl lg:max-2xl:leading-4 `;
      break;
    case HeaderType.H3:
      baseCls += `text-xl tracking-[.25rem] lg:max-2xl:tracking-[1rem] lg:max-2xl:text-5xl `;
      break;
    case HeaderType.H4:
      baseCls += `text-xl tracking-[.5rem] uppercase font-medium leading-tight `;
      break;
    case HeaderType.H5:
      baseCls += `text-xl md:max:2xl:text-2xl tracking-[.15rem] font-medium leading-tight `;
      break;
    default:
      break;
  }
  baseCls += props.isActive
    ? props.activeColor
    : `${props.defaultClr} ease-out duration-500`;
  return <span className={baseCls}>{props.letter}</span>;
};
