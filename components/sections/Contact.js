import Heading from "@/components/ui/Heading";
import { site } from "@/lib/site";
import { stats, collaborators } from "@/data/content";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa6";

// TODO: fill these in (or move them into "@/lib/site" and import from there).
// WhatsApp number: country code + number, digits only, e.g. "201001234567"
const WA_NUMBER = "201225029990";
const WA_TEXT = "Hi Mohamed, I’d like to discuss a project.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

const soc = [
  {
    id: "instagram-maaty",
    label: "Instagram - Maaty Mohmed",
    href: "https://www.instagram.com/maaty.mohmed?utm_source=qr&obrf=MWl6dDJod3FxdG9zMA%3D%3D",
    Icon: FaInstagram,
    ext: true,
  },
  {
    id: "instagram-mohmed",
    label: "Instagram - Mohmed Maaty",
    href: "https://www.instagram.com/mohmed_maaty_012?utm_source=qr&mdxt=NHExd3U3bnBuN2h0",
    Icon: FaInstagram,
    ext: true,
  },
  {
    id: "facebook-share",
    label: "Facebook - Share",
    href: "https://www.facebook.com/share/1FAEwR3tgc/",
    Icon: FaFacebook,
    ext: true,
  },
  {
    id: "facebook-profile",
    label: "Facebook - Profile",
    href: "https://www.facebook.com/mhmd.mhmd.abw.alm.aty.925634?rdid=pUJWWX5vlx7aPmY7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D5U4oCi7F%2F#",
    Icon: FaFacebook,
    ext: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-xl px-5 py-14 text-center">
      <Heading
        eyebrow="Initiate Dialogue"
        title="Your story deserves a director."
        sub="Mohamed accepts a limited number of commercial campaigns and scripted projects per quarter. Message now to secure your slot."
      />

      {/* Proof, from data/content.ts */}
      <dl className="mt-8 grid grid-cols-3 divide-x divide-cream/15 border-y border-cream/15 py-5">
        {stats.map(([value, label]) => (
          <div key={label} className="px-2">
            <dt className="text-2xl font-bold text-gold">{value}</dt>
            <dd className="mt-1 text-[10px] font-bold tracking-[.14em] text-cream/60">
              {label}
            </dd>
          </div>
        ))}
      </dl>

      {/* Main CTA */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-g mt-8 flex w-full items-center justify-center gap-3 py-4 text-base"
      >
        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        Start the conversation on WhatsApp
      </a>
      <p className="mt-3 text-[11px] font-bold tracking-[.12em] text-cream/60">
        REPLIES WITHIN 1 HOURS
      </p>

      {/* Social icons */}
      <ul className="mt-8 flex items-center justify-center gap-3">
        {soc.map(({ id, label, href, Icon, ext }) => (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(ext
                ? { target: "_blank", rel: "noopener noreferrer me" }
                : {})}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      {/* Collaborators, from data/content.ts */}
      <div className="mt-10">
        <p className="text-[10px] font-bold tracking-[.2em] text-sage">
          TRUSTED BY
        </p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-cream/60">
          {collaborators.map((name, i) => (
            <li key={name} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">•</span>}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
