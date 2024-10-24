import { HeaderType } from "./ClrChangeLetter";
import { SparkleLetters } from "./SparkleLetters";

export const SparkleLineBreak = () => {
  return (
    <SparkleLetters
      text={["--------------------"]}
      prefix="title"
      type={HeaderType.H5}
      defaultClr="text-white"
    />
  );
};
