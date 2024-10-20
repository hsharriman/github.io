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
      baseCls += `text-[160px] tracking-[2rem] leading-[11rem] `;
      break;
    case HeaderType.H2:
      baseCls += `text-3xl leading-4 `;
      break;
    case HeaderType.H3:
      baseCls += `text-5xl uppercase tracking-[1rem] `;
      break;
    case HeaderType.H4:
      baseCls += `text-xl tracking-[.5rem] uppercase font-medium leading-tight `;
      break;
    case HeaderType.H5:
      baseCls += `text-2xl tracking-[.15rem] font-medium leading-tight `;
      break;
    default:
      break;
  }
  baseCls += props.isActive
    ? props.activeColor
    : `${props.defaultClr} ease-out duration-500`;
  return <span className={baseCls}>{props.letter}</span>;
};
