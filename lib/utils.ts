export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDateRange(
  start: string,
  end: string | null,
  locale: string,
  presentLabel: string,
): string {
  const formatter = new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    month: "short",
    year: "numeric",
  });
  const startDate = formatter.format(new Date(`${start}-01`));
  const endDate = end ? formatter.format(new Date(`${end}-01`)) : presentLabel;
  return `${startDate} — ${endDate}`;
}
