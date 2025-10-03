// app/thanks/page.tsx
import Link from "next/link";

export const dynamic = "force-static"; // Seite darf statisch vorgerendert werden

type ThanksProps = {
  searchParams?: {
    name?: string | string[];
    email?: string | string[];
    role?: string | string[];
  };
};

export default function Thanks({ searchParams }: ThanksProps) {
  const name =
    (Array.isArray(searchParams?.name) ? searchParams?.name[0] : searchParams?.name) ?? "";
  const email =
    (Array.isArray(searchParams?.email) ? searchParams?.email[0] : searchParams?.email) ?? "";
  const role =
    (Array.isArray(searchParams?.role) ? searchParams?.role[0] : searchParams?.role) ?? "";

  return (
    <main className="min-h-[70vh] grid place-items-center px-4">
      <div className="max-w-xl w-full rounded-2xl border bg-white p-8 shadow-sm text-center">
        <h1 className="text-3xl font-semibold">Danke fürs Eintragen! 🎉</h1>
        <p className="mt-3 text-slate-600">
          Wir haben {name ? <strong>{name}</strong> : "dich"} auf die Warteliste gesetzt
          {role ? <> als <strong>{role}</strong></> : null}.
          {email ? <> Eine Bestätigung geht an <strong>{email}</strong>.</> : null}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="https://apps.apple.com/be/app/atyourservice24/id6748581941"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            App Store öffnen
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.quinten.atyourservice&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-50"
          >
            Google Play öffnen
          </a>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
