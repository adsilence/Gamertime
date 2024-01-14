import classNames from "classnames";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  cn?: string;
}

export function HStack({ children, cn }: LayoutProps) {
  return <div class={classNames("flex items-center", cn)}>{children}</div>;
}

export function VStack({ children, cn }: LayoutProps) {
  return <div class={classNames("flex flex-col", cn)}>{children}</div>;
}
