import { collaborators } from "@/data/content";
import Icon from "@/components/ui/Icon";

// كل مجموعة = القايمة متكررة 8 مرات، عشان تملى حتى الشاشات العريضة جدًا
const REPEAT = 8;

export default function Collaborators() {
  const group = Array.from({ length: REPEAT }, () => collaborators).flat();

  return (
    <section aria-label="Collaborators and broadcasters" className="bg-[#100f08] py-12">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="eyebrow">Reputation & Trust</p>
        <h2 className="h2">Collaborators & Broadcasters</h2>
      </div>

      {/* قارئ الشاشة يقرأ الأسماء مرة واحدة بس */}
      <ul className="sr-only">
        {collaborators.map((c) => <li key={c}>{c}</li>)}
      </ul>

      <div className="collab-marquee mt-6 overflow-hidden" aria-hidden="true">
        <div className="collab-track flex w-max">
          {[0, 1].map((g) => (
            <ul key={g} className="flex shrink-0 gap-3 pr-3">
              {group.map((c, i) => (
                <li
                  key={`${g}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full bg-panel2 px-4 py-3 text-sm font-bold"
                >
                  <Icon n="verified" size={18} className="text-gold" />
                  {c}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}