import { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children, ...props }: CardProps) {
  return (
    <div className="repo-ui-card" {...props}>
      {title ? <h3 className="repo-ui-card__title">{title}</h3> : null}
      <div className="repo-ui-card__body">{children}</div>
    </div>
  );
}
