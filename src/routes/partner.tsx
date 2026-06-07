import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — TK Foreign Private Employment Agency" },
      { name: "description", content: "Partner with TK Agency to hire trusted Ethiopian domestic staff for the Gulf. Contact our General Manager Asrat Biyazen." },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="TK Agency logo" className="size-9 object-contain" />
            <span className="font-display text-xl tracking-tight">TK Agency</span>
          </Link>
          <Link
            to="/"
            hash="top"
            className="border border-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-navy hover:text-brand-cream"
          >
            ← Home
          </Link>
        </div>
      </nav>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            For Employers & Agencies
          </span>
          <h1 className="mb-8 text-5xl leading-[1.05] lg:text-6xl">
            Partner <span className="italic">with us.</span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-brand-navy/70">
            TK Foreign Private Employment Agency works directly with families, households, and
            recruitment partners across the Gulf. Reach out to discuss placement requirements,
            timelines, and a long-term working relationship with our office in Addis Ababa.
          </p>

          <div className="mb-12 border border-brand-border bg-card p-8 lg:p-10">
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
              General Manager
            </span>
            <p className="mt-3 font-display text-3xl lg:text-4xl">Asrat Biyazen</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-brand-navy/50">
              TK Foreign Private Employment Agency
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <a href="tel:+251911460406" className="group block border-t border-brand-navy/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Primary</span>
              <p className="mt-4 font-display text-2xl group-hover:italic">+251 911 460 406</p>
            </a>
            <a href="tel:+251944100707" className="group block border-t border-brand-navy/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Secondary</span>
              <p className="mt-4 font-display text-2xl group-hover:italic">+251 944 100 707</p>
            </a>
            <a href="mailto:tkagent2@gmail.com" className="group block border-t border-brand-navy/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Email</span>
              <p className="mt-4 break-all font-display text-2xl group-hover:italic">tkagent2@gmail.com</p>
            </a>
          </div>

          <div className="mt-16 border-t border-brand-border pt-10">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
              Office
            </span>
            <address className="not-italic text-lg leading-relaxed text-brand-navy/70">
              Enkulal Fabrika area, near Police Kebebe<br />
              Pawe Building, 6th Floor<br />
              Addis Ababa, Ethiopia
            </address>
            <a
              href="https://maps.app.goo.gl/b2yQFi5Fn9NRPD616"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-navy hover:text-brand-cream"
            >
              Get Directions →
            </a>
            <iframe
              title="TK Agency office location"
              src="https://maps.google.com/maps?q=Pawe+Building+Enkulal+Fabrika+Addis+Ababa&output=embed"
              className="mt-8 aspect-[16/9] w-full border border-brand-border grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
