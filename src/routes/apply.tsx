import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply to Work Abroad — TK Foreign Private Employment Agency" },
      { name: "description", content: "Apply in person at our Addis Ababa office to begin your overseas employment journey with TK Agency." },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
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
            Worker Applications
          </span>
          <h1 className="mb-8 text-5xl leading-[1.05] lg:text-6xl">
            Apply to <span className="italic">work abroad.</span>
          </h1>

          <div className="mb-10 border-l-4 border-brand-gold bg-card p-8 lg:p-10">
            <p className="text-lg leading-relaxed text-brand-navy/80">
              <strong className="font-semibold text-brand-navy">Please note:</strong> all
              applications must be submitted <em>in person</em> at our Addis Ababa office.
              We do not accept applications by phone, email, or social media. This requirement
              is in place to verify your identity, review original documents, and ensure every
              candidate fully understands the contract terms before placement.
            </p>
          </div>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-brand-navy/70">
            Bring a valid Ethiopian ID or passport, recent passport-size photographs, and any
            certificates of prior work, training, or education. Our team will guide you through
            interviews, medical screening, and contract preparation.
          </p>

          <div className="grid gap-12 border-t border-brand-border pt-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                Office Address
              </span>
              <address className="not-italic text-lg leading-relaxed text-brand-navy/75">
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
            </div>
            <div>
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                Contact
              </span>
              <ul className="space-y-3 text-lg text-brand-navy/75">
                <li><a href="tel:+251911460406" className="hover:text-brand-gold">+251 911 460 406</a></li>
                <li><a href="tel:+251944100707" className="hover:text-brand-gold">+251 944 100 707</a></li>
                <li><a href="mailto:tkagent2@gmail.com" className="break-all hover:text-brand-gold">tkagent2@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
              Find Us on the Map
            </span>
            <iframe
              title="TK Agency office location"
              src="https://maps.google.com/maps?q=Pawe+Building+Enkulal+Fabrika+Addis+Ababa&output=embed"
              className="aspect-[16/9] w-full border border-brand-border grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
