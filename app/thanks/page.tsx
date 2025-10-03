// app/thanks/page.tsx
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Thanks() {
  const q = useSearchParams();
  const email = q.get('email') || q.get('e') || '';
  const utmSource = q.get('utm_source') || '';
  const utmMedium = q.get('utm_medium') || '';
  const utmCampaign = q.get('utm_campaign') || '';

  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-lg w-full mx-4 rounded-2xl border bg-white shadow p-8 text-center">
        <h1 className="text-2xl font-semibold">Danke fürs Eintragen! 🙌</h1>
        <p className="text-slate-600 mt-2">
          Wir melden uns, sobald deine Stadt live ist.
        </p>

        {email ? (
          <p className="text-sm text-slate-500 mt-4">
            <span className="font-medium">E-Mail:</span> {email}
          </p>
        ) : null}

        {(utmSource || utmMedium || utmCampaign) ? (
          <p className="text-xs text-slate-400 mt-2">
            Quelle: {utmSource || '–'} / {utmMedium || '–'} / {utmCampaign || '–'}
          </p>
        ) : null}

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
