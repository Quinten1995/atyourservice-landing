// app/thanks/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static"; // darf statisch vorgerendert werden

export const metadata: Metadata = {
  title: "Danke – Du stehst auf der Warteliste | AtYourService",
  description: "Vielen Dank! Wir haben dich auf die Warteliste gesetzt.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
  name?: string | string[];
  email?: string | string[];
  role?: string | string[];
  lang?: string | string[]; // de | nl | en
};

type ThanksProps = { searchParams?: SearchParams };

type Dict = {
  heading: string;
  we_added: (who: string) => React.ReactNode;
  on_list: string; // sprachspezifischer Satzteil
  as_role: (role: string) => React.ReactNode;
  and_email: (email: string) => React.ReactNode;
  open_appstore: string;
  open_play: string;
  back_home: string;
  tip: string;
  role_pro: string;
  role_customer: string;
  contact_label: string;
};

const t: Record<"de" | "nl" | "en", Dict> = {
  de: {
    heading: "Danke fürs Eintragen! 🎉",
    we_added: (who) => (who ? <>Wir haben <strong>{who}</strong></> : "Wir haben dich"),
    on_list: " auf die Warteliste gesetzt",
    as_role: (role) => <> als <strong>{role}</strong></>,
    and_email: (email) => <>. Eine Bestätigung geht an <strong>{email}</strong>.</>,
    open_appstore: "App Store öffnen",
    open_play: "Google Play öffnen",
    back_home: "Zurück zur Startseite",
    tip: "Tipp: Markiere dir die App-Links – wir informieren dich, sobald deine Stadt live ist.",
    role_pro: "Dienstleister",
    role_customer: "Kunde",
    contact_label: "Fragen?",
  },
  nl: {
    heading: "Bedankt voor je aanmelding! 🎉",
    we_added: (who) => (who ? <>We hebben <strong>{who}</strong></> : "We hebben je"),
    on_list: " op de wachtlijst gezet",
    as_role: (role) => <> als <strong>{role}</strong></>,
    and_email: (email) => <>. Een bevestiging gaat naar <strong>{email}</strong>.</>,
    open_appstore: "Openen in App Store",
    open_play: "Openen in Google Play",
    back_home: "Terug naar de startpagina",
    tip: "Tip: Bewaar de app-links – we laten het weten zodra jouw stad live is.",
    role_pro: "Vakman",
    role_customer: "Klant",
    contact_label: "Vragen?",
  },
  en: {
    heading: "Thanks for joining! 🎉",
    we_added: (who) => (who ? <>We added <strong>{who}</strong></> : "You're on the list"),
    on_list: "",
    as_role: (role) => <> as a <strong>{role}</strong></>,
    and_email: (email) => <>. A confirmation will be sent to <strong>{email}</strong>.</>,
    open_appstore: "Open in App Store",
    open_play: "Open in Google Play",
    back_home: "Back to home",
    tip: "Tip: Save the app links — we’ll notify you as soon as your city goes live.",
    role_pro: "Provider",
    role_customer: "Customer",
    contact_label: "Questions?",
  },
};

const SUPPORT_EMAIL = "info@atyourservice24.eu";
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=AtYourService%20–%20Warteliste`;

export default function Thanks({ searchParams }: ThanksProps) {
  const getFirst = (v?: string | string[]) => (Array.isArray(v) ? v[0] ?? "" : v ?? "");

  const name = getFirst(searchParams?.name);
  const email = getFirst(searchParams?.email);
  const roleRaw = getFirst(searchParams?.role);
  const langRaw = (getFirst(searchParams?.lang) || "de").toLowerCase();

  // Typ-Guard statt any
  function isLang(x: string): x is "de" | "nl" | "en" {
    return x === "de" || x === "nl" || x === "en";
  }
  const lang: "de" | "nl" | "en" = isLang(langRaw) ? langRaw : "de";

  const tr = t[lang];

  // Rolle hübsch lokalisieren
  let role = "";
  if (roleRaw === "pro") role = tr.role_pro;
  else if (roleRaw === "customer") role = tr.role_customer;
  else if (roleRaw) role = roleRaw; // Fallback: roher Wert

  return (
    <main className="min-h-[70vh] grid place-items-center px-4">
      <div className="max-w-xl w-full rounded-2xl border bg-white p-8 shadow-sm text-center">
        <h1 className="text-3xl font-semibold">{tr.heading}</h1>

        <p className="mt-3 text-slate-600">
          {tr.we_added(name)}
          {tr.on_list}
          {role ? tr.as_role(role) : null}
          {email ? tr.and_email(email) : "."}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="https://apps.apple.com/be/app/atyourservice24/id6748581941"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            {tr.open_appstore}
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.quinten.atyourservice&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            {tr.open_play}
          </a>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          {tr.back_home}
        </Link>

        <p className="mt-4 text-xs text-slate-500">{tr.tip}</p>

        {/* Kontaktzeile */}
        <p className="mt-6 text-sm text-slate-600">
          {tr.contact_label}{" "}
          <a href={MAILTO} className="underline">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
