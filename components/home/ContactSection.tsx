"use client";

import { site } from "@/content/site";
import { pick } from "@/content/types";
import { useReveal } from "@/components/motion/useReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) nextErrors.name = t("validation.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email") || ""))) {
      nextErrors.email = t("validation.email");
    }
    if (!String(data.get("message") || "").trim()) {
      nextErrors.message = t("validation.message");
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          inquiry: data.get("inquiry"),
          preferredTime: data.get("preferredTime"),
          message: data.get("message"),
          locale,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const quickLinks = [
    { href: `tel:${site.phone}`, label: t("quick.call"), icon: Phone },
    { href: site.whatsapp, label: t("quick.whatsapp"), icon: MessageCircle },
    { href: `mailto:${site.email}`, label: t("quick.email"), icon: Mail },
    { href: site.mapsUrl, label: t("quick.location"), icon: MapPin },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6"
    >
      <div className="absolute inset-0 -z-10">
        <Image src="/contact.svg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal text-white">
          <h2 id="contact-title" className="font-readex text-4xl font-medium md:text-5xl">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-4 max-w-md text-white/80">{t("body")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="glass inline-flex items-center gap-2 px-4 py-2 text-sm text-white transition-opacity hover:opacity-80"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70">{pick(site.location, locale)}</p>
        </div>

        <div className="reveal rounded-2xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-md md:p-8">
          <form className="space-y-4" onSubmit={onSubmit}>
            <Select name="interest" placeholder={t("interestArea")}>
              <option value="mobileApp">{t("interests.mobileApp")}</option>
              <option value="realtime">{t("interests.realtime")}</option>
              <option value="consulting">{t("interests.consulting")}</option>
              <option value="other">{t("interests.other")}</option>
            </Select>

            <div>
              <Input name="name" placeholder={t("fullName")} aria-invalid={Boolean(errors.name)} />
              {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder={t("email")}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-2">
              <div className="flex h-12 items-center rounded-md border border-input bg-white/90 px-3 text-sm text-muted-foreground">
                {t("country")} +970
              </div>
              <Input name="phone" type="tel" placeholder={t("phone")} />
            </div>

            <Select name="inquiry" placeholder={t("inquiryType")}>
              <option value="freelance">{t("inquiries.freelance")}</option>
              <option value="fulltime">{t("inquiries.fulltime")}</option>
              <option value="consulting">{t("inquiries.consulting")}</option>
              <option value="collaboration">{t("inquiries.collaboration")}</option>
            </Select>

            <Select name="preferredTime" placeholder={t("preferredTime")}>
              <option value="morning">{t("times.morning")}</option>
              <option value="afternoon">{t("times.afternoon")}</option>
              <option value="evening">{t("times.evening")}</option>
            </Select>

            <div>
              <Textarea
                name="message"
                placeholder={t("message")}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              ) : null}
            </div>

            <p className="text-xs leading-5 text-muted-foreground">{t("consent")}</p>

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? t("sending") : t("submit")}
            </Button>

            {status === "success" ? (
              <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                {t("success")}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                {t("error")}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
