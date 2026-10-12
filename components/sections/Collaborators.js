import { collaborators } from "@/data/content";
import Icon from "@/components/ui/Icon";
export default function Collaborators() {
  const items = [...collaborators, ...collaborators];
  return (
    <section
      aria-label="Collaborators and broadcasters"
      className="bg-[#100f08] py-12"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="eyebrow">Reputation & Trust</p>
        <h2 className="h2">Collaborators & Broadcasters</h2>
      </div>
      <div className="mt-6 overflow-hidden">
        <ul className="marquee flex w-max gap-3 pl-3">
          {items.map((c, i) => (
            <li
              key={i}
              aria-hidden={i >= collaborators.length}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-panel2 px-4 py-3 text-sm font-bold"
            >
              <Icon n="verified" size={18} className="text-gold" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
