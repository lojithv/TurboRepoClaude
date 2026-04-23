import { Card as PrimeCard, CardProps as PrimeCardProps } from "primereact/card";

export interface CardProps extends PrimeCardProps {}

export function Card({ className, ...props }: CardProps) {
  return <PrimeCard className={["repo-ui-card", className].filter(Boolean).join(" ")} {...props} />;
}
