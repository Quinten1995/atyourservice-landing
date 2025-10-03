'use client';

import { useState, useEffect } from 'react';

/** Übersetzungen als konstantes Objekt (keine anys) */
const t = {
  de: {
    nav_features: 'Features',
    nav_pricing: 'Preise',
    nav_faq: 'FAQ',
    nav_join: 'Ich bin Dienstleister',
    badge: '0% Provision',
    hero_title: 'Jobs in deiner Nähe. Sofort.',
    hero_sub:
      'AtYourService verbindet Kunden und Dienstleister ohne Provisionen – fair, schnell und lokal.',
    cta_customer: 'Ich suche Hilfe',
    cta_pro: 'Ich bin Dienstleister',
    store_badge: 'Jetzt verfügbar im App Store & Play Store',
    why_title: 'Warum AtYourService?',
    why: [
      ['Radius-Sicht', 'Du siehst nur Jobs in deinem Arbeitsgebiet – sauber gefiltert nach Umkreis.'],
      ['Sofort-Push', 'Neue Jobs in deiner Nähe? Du bekommst sofort eine Push-Meldung.'],
      ['Direkter Kontakt', 'Wir verbinden Kunde ↔ Dienstleister. Preis & Zahlung klärt ihr direkt.'],
      ['Keine Provisionen', '0% Gebühren. Keine versteckten Kosten – fair und transparent.'],
      ['7 Sprachen', 'Die App passt sich automatisch an deine Gerätesprache an.'],
      ['First come, first served', 'Wer zuerst reagiert, hat die besten Chancen – nachvollziehbar.'],
    ] as [string, string][],
    note_title: 'Hinweis zum Start',
    note_body:
      'Wir rollen Städte schrittweise aus. Anfangs siehst du ggf. wenige oder keine Jobs – das ändert sich schnell.',
    pricing_title: 'Preise',
    plans: [
      ['Free', '0€', 'immer', ['Jobs im Umkreis sehen', 'Push bei neuen Aufträgen', 'Basis-Profil']],
      ['Silber', '9,99€', 'Monat', ['Erweiterter Radius', 'Höhere Sichtbarkeit', 'Schnellere Benachrichtigungen']],
      ['Gold', '19,99€', 'Monat', ['Max. Radius & Priorität', 'Top-Platzierungen', 'Premium-Support']],
    ] as [string, string, string, string[]][],
    faq_title: 'FAQ',
    faqs: [
      ['Gibt es Provisionen?', 'Nein. Wir nehmen 0% – Preis & Zahlung klärt ihr direkt miteinander.'],
      ['Wie bekomme ich Jobs?', 'Push-Meldungen für neue Aufträge in deinem Radius. Wer zuerst reagiert, hat die besten Chancen.'],
      ['Wann startet meine Stadt?', 'Phasenweise Rollout. Trag dich ein – wir informieren dich, sobald deine Stadt live ist.'],
    ] as [string, string][],
    join_title: 'Früh dabei sein?',
    join_body:
      'Trag dich ein, wenn du Dienstleister bist – das Abo gilt nur für Dienstleister (Kunden brauchen kein Abo und nutzen die App kostenlos).',
    join_cta: 'Auf die Warteliste',
    footer_rights: 'Alle Rechte vorbehalten',
    footer_imprint: 'Impressum',
    footer_privacy: 'Datenschutz',
    footer_terms: 'AGB',
    note_sub: 'Hinweis: Das Abo ist nur für Dienstleister. Kunden brauchen kein Abo.',
    role_customer: 'Kunde',
    role_pro: 'Dienstleister',
    btn_join_as_pro: 'Als Dienstleister eintragen',
    btn_join_as_customer: 'Als Kunde eintragen',
  },
  nl: {
    nav_features: 'Features',
    nav_pricing: 'Prijzen',
    nav_faq: 'FAQ',
    nav_join: 'Ik ben vakman',
    badge: '0% commissie',
    hero_title: 'Jobs in jouw buurt. Meteen.',
    hero_sub:
      'AtYourService verbindt klanten en vakmensen zonder commissies – eerlijk, snel en lokaal.',
    cta_customer: 'Ik zoek hulp',
    cta_pro: 'Ik ben vakman',
    store_badge: 'Nu beschikbaar in App Store & Play Store',
    why_title: 'Waarom AtYourService?',
    why: [
      ['Radius-weergave', 'Je ziet alleen jobs binnen jouw werkgebied – gefilterd op straal.'],
      ['Directe push', 'Nieuwe jobs in de buurt? Meteen een pushmelding.'],
      ['Direct contact', 'Wij verbinden klant ↔ vakman. Prijs & betaling regel je onderling.'],
      ['Geen commissies', '0% kosten. Geen verborgen kosten – eerlijk en transparant.'],
      ['7 talen', 'De app past zich automatisch aan je toesteltaal aan.'],
      ['First come, first served', 'Wie eerst reageert, maakt de meeste kans – eenvoudig & eerlijk.'],
    ] as [string, string][],
    note_title: 'Opstartnotitie',
    note_body:
      'We rollen steden gefaseerd uit. In het begin zie je mogelijk weinig jobs – dat verandert snel.',
    pricing_title: 'Prijzen',
    plans: [
      ['Free', '€0', 'altijd', ['Jobs in jouw straal', 'Push bij nieuwe opdrachten', 'Basisprofiel']],
      ['Zilver', '€9,99', 'maand', ['Grotere straal', 'Meer zichtbaarheid', 'Snellere meldingen']],
      ['Goud', '€19,99', 'maand', ['Max. straal & prioriteit', 'Top-posities', 'Premium support']],
    ] as [string, string, string, string[]][],
    faq_title: 'Veelgestelde vragen',
    faqs: [
      ['Zijn er commissies?', 'Nee. Wij nemen 0% – prijs & betaling regel je rechtstreeks met de klant.'],
      ['Hoe krijg ik jobs?', 'Pushmeldingen voor nieuwe opdrachten binnen jouw straal. Eerst reageren = meeste kans.'],
      ['Wanneer start mijn stad?', 'Gefaseerde uitrol. Schrijf je in – we laten het weten zodra jouw stad live is.'],
    ] as [string, string][],
    join_title: 'Als eerste erbij?',
    join_body:
      'Schrijf je in als je vakman bent – het abonnement is alleen voor vakmensen (klanten hebben geen abonnement en gebruiken de app gratis).',
    join_cta: 'Op de wachtlijst',
    footer_rights: 'Alle rechten voorbehouden',
    footer_imprint: 'Impressum',
    footer_privacy: 'Privacy',
    footer_terms: 'Voorwaarden',
    note_sub: 'Let op: Het abonnement is alleen voor vakmensen. Klanten hebben geen abonnement nodig.',
    role_customer: 'Klant',
    role_pro: 'Vakman',
    btn_join_as_pro: 'Inschrijven als vakman',
    btn_join_as_customer: 'Inschrijven als klant',
  },
} as const;

/** Sprachtyp direkt aus den Keys abgeleitet */
type Lang = keyof typeof t;

/* ---------- Stabiler Crossfade-Slider für Hochformat-Screens ---------- */
function ScreenshotSlider({ shots }: { shots: { src: string; alt: string }[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % shots.length), 4000);
    return () => clearInterval(id);
  }, [shots.length]);

  const go = (dir: number) => setI((p) => (p + dir + shots.length) % shots.length);

  return (
    <div className="relative group">
      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-xl overflow-hidden p-4">
        <div className="relative rounded-2xl overflow-hidden bg-slate-50 aspect-[9/19]">
          {shots.map((s, idx) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              draggable={false}
              className={`absolute inset-0 h-full w-full object-contain select-none transition-opacity duration-500 ${
                idx === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => go(-1)}
        className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-2 py-1 text-sm opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-2 py-1 text-sm opacity-0 group-hover:opacity-100 transition"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {shots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full border ${
              i === idx ? 'bg-indigo-600 border-indigo-600' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Deep-Linking: App öffnen (Premium) oder Store-Fallback ---------- */
type PlanKey = 'free' | 'silver' | 'gold';

const APP_SCHEME = 'atyourservice://premium';
const ANDROID_PKG = 'com.quinten.atyourservice';

function openPlanDeepLink(plan: PlanKey, storeLinks: { ios: string; android: string }) {
  const qs = new URLSearchParams({ plan, source: 'landing' }).toString();
  const schemeUrl = `${APP_SCHEME}?${qs}`;
  const androidIntent = `intent://premium?${qs}#Intent;scheme=atyourservice;package=${ANDROID_PKG};S.browser_fallback_url=${encodeURIComponent(
    storeLinks.android
  )};end`;

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  let didHide = false;
  const hiddenProp = 'hidden' in document ? 'hidden' : ('webkitHidden' in document ? 'webkitHidden' : '') as keyof Document;
  const visibilityEvent = hiddenProp === 'hidden' ? 'visibilitychange' : hiddenProp ? 'webkitvisibilitychange' : '';

  const onHidden = () => { didHide = true; };
  if (visibilityEvent) document.addEventListener(visibilityEvent, onHidden as any, { once: true });

  const start = Date.now();
  const go = (url: string) => { window.location.href = url; };

  if (isAndroid) {
    go(androidIntent);
  } else if (isIOS) {
    go(schemeUrl);
    setTimeout(() => {
      if (!didHide && Date.now() - start < 1800) window.location.href = storeLinks.ios;
    }, 1200);
  } else {
    // Desktop: direkt zum Store (optional)
    window.location.href = storeLinks.ios;
  }
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('de');
  const tr = t[lang];

  const featureIcons = ['📍', '🔔', '🤝', '🛡️', '🌐', '⚡️'] as const;

  const store = {
    android:
      'https://play.google.com/store/apps/details?id=com.quinten.atyourservice&pcampaignid=web_share',
    ios: 'https://apps.apple.com/be/app/atyourservice24/id6748581941',
  } as const;

  const [role, setRole] = useState<'customer' | 'pro' | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const shots = [
    { src: '/screens/01.png', alt: 'App: Jobliste' },
    { src: '/screens/02.png', alt: 'App: Kategorie wählen' },
    { src: '/screens/03.png', alt: 'App: Onboarding' },
    { src: '/screens/04.png', alt: 'App: Jobkarte' },
  ];

  /** Clientseitiger Submit → Formspree + Redirect auf /thanks (mit UTM-Übernahme) */
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);

    try {
      await fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      }).catch(() => {});

      const params = new URLSearchParams();
      const email = String(fd.get('email') ?? '');
      const roleVal = String(fd.get('role') ?? '');
      const langVal = String(fd.get('lang') ?? '');

      if (email) params.set('email', email);
      if (roleVal) params.set('role', roleVal);
      if (langVal) params.set('lang', langVal);

      const current = new URLSearchParams(window.location.search);
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
        const v = current.get(k);
        if (v) params.set(k, v);
      });

      const base = process.env.NEXT_PUBLIC_SITE_URL ?? '';
      const dest = `${base || ''}/thanks?${params.toString()}`;
      window.location.assign(dest);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded bg-slate-900" />
            <span className="font-semibold">AtYourService</span>
            <span className="ml-2 rounded-full border px-2 py-0.5 text-xs">Beta</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <a href="#features" className="hover:underline">{tr.nav_features}</a>
            <a href="#pricing" className="hover:underline">{tr.nav_pricing}</a>
            <a href="#faq" className="hover:underline">{tr.nav_faq}</a>
            <a href="#join" className="ml-2 rounded-lg border px-3 py-1.5 hover:bg-slate-50">
              {tr.nav_join}
            </a>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="ml-2 rounded-lg border px-2 py-1 bg-white"
              aria-label="Sprache / Taal"
            >
              <option value="de">DE</option>
              <option value="nl">NL</option>
            </select>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="animated-gradient" />
        <div className="blob w-[360px] h-[360px] bg-sky-300/55 -top-16 -left-20"></div>
        <div className="blob w-[300px] h-[300px] bg-violet-300/55 top-24 right-10 [animation-delay:4s]"></div>
        <div className="blob w-[280px] h-[280px] bg-emerald-300/45 bottom-0 left-1/2 -translate-x-1/2 [animation-delay:8s]"></div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-indigo-700 text-white text-xs px-2 py-1 mb-4 tracking-wide shadow">
              {tr.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              {tr.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mt-5 max-w-xl">{tr.hero_sub}</p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#features"
                className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 px-6 py-3 text-base hover:bg-white"
              >
                {tr.cta_customer}
              </a>
              <button
                type="button"
                onClick={() => {
                  setRole('pro');
                  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-xl bg-indigo-600 text-white px-6 py-3 text-base shadow hover:bg-indigo-700 transition"
              >
                {tr.cta_pro}
              </button>
            </div>

            {/* Store-Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={store.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-white/80 backdrop-blur px-3 py-2 hover:bg-white"
                aria-label={lang === 'de' ? 'Im App Store öffnen' : 'Open in App Store'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100" aria-hidden="true">
                  <path fill="currentColor" d="M16.365 1.43c.02 1.18-.43 2.16-1.12 2.96-.74.84-1.94 1.48-3.12 1.4-.14-1.14.47-2.34 1.17-3.06.77-.8 2.05-1.39 3.07-1.3zM21 17.38c-.4.94-.88 1.77-1.43 2.49-.74.98-1.36 1.66-2.05 2.12-.79.49-1.64.74-2.55.75-.98.01-1.62-.23-2.23-.47-.53-.21-1.03-.41-1.58-.41-.58 0-1.1.2-1.65.41-.6.24-1.24.49-2.15.47-.92-.02-1.79-.32-2.6-.83-.74-.47-1.42-1.14-2.04-2.02C1.78 18.5.98 16.4 1 14.42c.01-1.26.29-2.49.83-3.58.53-1.07 1.27-1.94 2.22-2.6.83-.57 1.73-.88 2.68-.9.88-.02 1.62.25 2.2.5.51.21.96.39 1.34.39.35 0 .79-.17 1.31-.38.7-.28 1.5-.6 2.53-.53.93.04 1.78.34 2.55.9-.95.57-1.67 1.35-2.17 2.32-.53 1.02-.79 2.1-.8 3.23.01 1.27.35 2.32.92 3.17.56.84 1.31 1.43 2.23 1.75.22.08.46.14.7.2z"/>
                </svg>
                <span className="text-sm font-medium">App Store</span>
              </a>
              <a
                href={store.android}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-white/80 backdrop-blur px-3 py-2 hover:bg-white"
                aria-label={lang === 'de' ? 'In Google Play öffnen' : 'Open in Google Play'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100" aria-hidden="true">
                  <path fill="currentColor" d="M3.6 2.2l11.7 9.05c.3.23.3.68 0 .91L3.6 21.2c-.43.33-1.05.02-1.05-.46V2.66c0-.48.62-.79 1.05-.46zm13.5 6.1l3.38-2.63c.34-.26.82-.02.82.4v11.86c0 .42-.48.67-.82.4l-3.38-2.63-3.1-2.4a.6.6 0 010-.96l3.1-2.08z"/>
                </svg>
                <span className="text-sm font-medium">Google Play</span>
              </a>
              <span className="text-sm text-slate-600">{tr.store_badge}</span>
            </div>
          </div>

          {/* Slider rechts – fixierte Breite, kein Überlaufen */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-[min(100%,360px)] md:w-[420px]">
              <ScreenshotSlider shots={shots} />
            </div>
            <div className="absolute -bottom-4 right-0 hidden md:block">
              <span className="rounded-full border bg-white/80 backdrop-blur shadow px-3 py-1 text-xs">
                v1.0 • Multi-Lang • iOS &amp; Android
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">{tr.why_title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.why.map(([title, desc]: [string, string], i: number) => (
            <div key={title} className="flex gap-4 items-start rounded-2xl border bg-white p-5 shadow-sm">
              <div className="shrink-0 grid place-items-center size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 text-white text-lg">
                <span aria-hidden>{featureIcons[i % featureIcons.length]}</span>
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LAUNCH NOTE */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <span className="rounded-full bg-indigo-700 text-white text-xs px-2 py-1">Info</span>
          <h3 className="font-semibold mt-3">{tr.note_title}</h3>
          <p className="text-sm text-slate-600 mt-1">{tr.note_body}</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">{tr.pricing_title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tr.plans.map(([name, price, period, list]: [string, string, string, string[]], i: number) => {
            const planKey: PlanKey =
              name.toLowerCase() === 'free' ? 'free' :
              name.toLowerCase().startsWith('sil') ? 'silver' : 'gold';

            return (
              <div
                key={name}
                className={`rounded-2xl border bg-white shadow-sm h-full p-6 ${i === 1 ? 'ring-2 ring-indigo-600' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{name}</h3>
                  {i === 1 && <span className="rounded-full border px-2 py-0.5 text-xs">Beliebt</span>}
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{price}</span>
                  <span className="text-slate-500">/{period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {list.map((h) => (
                    <li key={h} className="flex gap-2 items-start">
                      <span className="mt-1 size-3 rounded-full bg-indigo-600 inline-block" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openPlanDeepLink(planKey, { ios: store.ios, android: store.android })}
                  className="mt-5 w-full rounded-lg border px-4 py-2 hover:bg-slate-50"
                >
                  Jetzt wählen
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">{tr.faq_title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tr.faqs.map(([q, a]: [string, string]) => (
            <div key={q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-sm text-slate-600 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-3">{tr.join_title}</h2>
        <p className="text-slate-600 max-w-prose">{tr.join_body}</p>

        <form
          action="https://formspree.io/f/xanporqg"
          method="POST"
          onSubmit={onSubmit}
          className="mt-4 flex flex-col gap-3 max-w-xl"
        >
          <input type="hidden" name="role" value={role ?? 'pro'} />
          <input type="hidden" name="lang" value={lang} />
          <input type="hidden" name="_subject" value="AtYourService Warteliste" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={lang === 'de' ? 'dein@email.com' : 'jouw@email.com'}
            className="h-11 rounded-xl border px-3"
            required
          />

          <button
            className="h-11 rounded-xl bg-indigo-600 text-white px-5 disabled:opacity-50"
            disabled={submitting}
          >
            {submitting
              ? 'Wird gesendet…'
              : role === 'pro'
                ? (lang === 'de' ? t.de.btn_join_as_pro : t.nl.btn_join_as_pro)
                : role === 'customer'
                  ? (lang === 'de' ? t.de.btn_join_as_customer : t.nl.btn_join_as_customer)
                  : (lang === 'de' ? t.de.join_cta : t.nl.join_cta)}
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-2">
          {lang === 'de' ? t.de.note_sub : t.nl.note_sub}
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t mt-8">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} AtYourService • {tr.footer_rights}</div>
          <div className="flex gap-4">
            <a className="hover:underline" href="#">{tr.footer_imprint}</a>
            <a className="hover:underline" href="#">{tr.footer_privacy}</a>
            <a className="hover:underline" href="#">{tr.footer_terms}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
