import classNames from "classnames";

interface StackProps {
  children: JSX.Element | JSX.Element[];
  align?: "start" | "end" | "center" | "stretch";
  cn?: string;
}

export function HStack({ children, cn }: StackProps) {
  return <div class={classNames(`flex`, cn)}>{children}</div>;
}

export function VStack({ children, align = "center", cn }: StackProps) {
  return <div class={classNames(`flex flex-col`, cn)}>{children}</div>;
}
