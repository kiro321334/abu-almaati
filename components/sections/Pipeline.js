import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
const tone = ['bg-gold text-bg', 'bg-panel2 text-gold', 'bg-panel2 text-gold', 'bg-sage text-bg'];
export default function Pipeline() {
  return (<section id="pipeline" className="mx-auto max-w-3xl px-5 py-14"><p className="eyebrow reveal">The Pipeline</p><h2 className="h2 reveal">From Slate to Screen</h2>
    <ol className="mt-8 grid gap-6">{steps.map(([t, d], i) => (<li key={t} className="reveal relative flex gap-4">{i < 3 && <span aria-hidden="true" className="absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-cream/20" />}
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${tone[i]}`}>{i + 1}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-cream/80">{d}</p></div></li>))}</ol></section>);
}
