import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Code({
  children,
  className,
}: Readonly<CardProps>): JSX.Element {
  return <code className={className}>{children}</code>;
}
