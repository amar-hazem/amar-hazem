import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href: string;
  title: string;
}

export function Card({
  children,
  className,
  href,
  title,
}: Readonly<CardProps>): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
