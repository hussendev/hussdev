import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { routing, type Locale } from "@/i18n/routing";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export default async function NotFoundPage() {
  let locale: Locale = routing.defaultLocale;
  try {
    const resolved = await getLocale();
    if (routing.locales.includes(resolved as Locale)) {
      locale = resolved as Locale;
    }
  } catch {
    // not-found can render outside a locale request during static generation
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <h1 className="font-readex text-4xl font-medium">{t("title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("body")}</p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="secondary" size="lg">
            {t("cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
