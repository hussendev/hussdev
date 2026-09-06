"use client";

import { allStackTags, type Category, type Platform, type Status } from "@/content/projects";
import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export function ProjectFilterBar() {
  const t = useTranslations("filter");
  const router = useRouter();
  const [platform, setPlatform] = useState("");
  const [category, setCategory] = useState("");
  const [stack, setStack] = useState("");
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (platform) params.set("platform", platform);
    if (category) params.set("category", category);
    if (stack) params.set("stack", stack);
    if (status) params.set("status", status);
    const query = params.toString();
    router.push(query ? `/projects?${query}` : "/projects");
  }

  return (
    <div className="hero-item absolute inset-x-0 bottom-14 z-10 w-full px-2 sm:bottom-16">
      <form
        aria-label={t("ariaLabel")}
        onSubmit={onSubmit}
        className="container mx-auto w-full"
      >
        <div className={cn("glass-filter-bar rounded-2xl p-3 lg:p-4")}>
          <div className="grid grid-cols-2 items-center gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            <Select
              tone="onDark"
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
              placeholder={t("any")}
            >
              <option value="">{t("any")}</option>
              {(["android", "ios", "both"] as Platform[]).map((value) => (
                <option key={value} value={value}>
                  {t(`platforms.${value}`)}
                </option>
              ))}
            </Select>

            <Select
              tone="onDark"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder={t("any")}
            >
              <option value="">{t("any")}</option>
              {(
                [
                  "social",
                  "transport",
                  "commerce",
                  "healthcare",
                  "education",
                  "services",
                ] as Category[]
              ).map((value) => (
                <option key={value} value={value}>
                  {t(`categories.${value}`)}
                </option>
              ))}
            </Select>

            <Select
              tone="onDark"
              value={stack}
              onChange={(event) => setStack(event.target.value)}
              placeholder={t("any")}
            >
              <option value="">{t("any")}</option>
              {allStackTags.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>

            <Select
              tone="onDark"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              placeholder={t("any")}
            >
              <option value="">{t("any")}</option>
              {(["production", "productionReady"] as Status[]).map((value) => (
                <option key={value} value={value}>
                  {t(`statuses.${value}`)}
                </option>
              ))}
            </Select>

            <Button
              type="submit"
              variant="default"
              className="col-span-2 h-12 min-w-[7.5rem] px-8 lg:col-span-1"
            >
              {t("search")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
