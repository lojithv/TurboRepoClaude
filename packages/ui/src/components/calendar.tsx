import {
  Calendar as PrimeCalendar,
  CalendarProps as PrimeCalendarProps,
  CalendarSelectionMode,
} from "primereact/calendar";

export type CalendarProps<TMode extends CalendarSelectionMode = "single"> = PrimeCalendarProps<TMode>;

export function Calendar<TMode extends CalendarSelectionMode = "single">(props: CalendarProps<TMode>) {
  const className = ["repo-ui-calendar", props.className].filter(Boolean).join(" ");
  return <PrimeCalendar {...(props as PrimeCalendarProps<TMode>)} className={className} />;
}
