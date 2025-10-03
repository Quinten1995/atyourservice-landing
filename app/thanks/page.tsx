// app/thanks/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static"; // darf statisch vorgerendert werden

export const metadata: Metadata = {
  title: "Danke – Du stehst auf der Warteliste | AtYourService",
  description: "Vielen Dank! Wir haben dich auf die Warteliste gesetzt.",
  robots: {
    index: false, // Danke-Seite nicht in Suchergebnissen anzeigen
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
  name?: string | string[];
  email?: string | string[];
  role?: string | string[];
};

type ThanksProps = { searchParams?: SearchParams };

export default function Thanks({ searchParams }: ThanksProps) {
  const getFirst = (v?: string | string[]) =>
    Array.isArray(v) ? v[0] ?? "" : v ?? "";

  const name = getFirst(searchParams?.name);
  const email = getFirst(searchParams?.email);
  const roleRaw = getFirst(searchParams?.role);

  // Schöne Anzeige der Rolle
  const role =
    roleRaw === "pro"
      ? "Dienstleister"
      : roleRaw === "customer"
      ? "Kunde"
      : roleRaw || "";

  return (
    <main className="min-h-[70vh] grid place-items-center px-4">
      <div className="max-w-xl w-full rounded-2xl border bg-white p-8 shadow-sm text-center">
        <h1 className="text-3xl font-semibold">Danke fürs Eintragen! 🎉</h1>

        <p className="mt-3 text-slate-600">
          {name ? <>Wir haben <strong>{name}</strong></> : "Wir haben dich"} auf
          die Warteliste gesetzt
          {role ? (
            <>
              {" "}
              als <strong>{role}</strong>
            </>
          ) : null}
          .
          {email ? (
            <>
              {" "}
              Eine Bestätigung geht an <strong>{email}</strong>.
            </>
          ) : null}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="https://apps.apple.com/be/app/atyourservice24/id6748581941"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            App&nbsp;Store öffnen
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.quinten.atyourservice&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            Google&nbsp;Play öffnen
          </a>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          Zurück zur Startseite
        </Link>

        <p className="mt-4 text-xs text-slate-500">
          Tipp: Markiere dir die App-Links – wir informieren dich, sobald deine
          Stadt live ist.
        </p>
      </div>
    </main>
  );
}
