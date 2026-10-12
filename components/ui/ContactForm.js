'use client';
import { site } from '@/lib/site';
import { categories } from '@/data/content';
import Icon from '@/components/ui/Icon';
const inp = 'mt-2 w-full rounded-xl bg-panel2 px-4 py-3.5 text-base text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold';
const lab = 'block text-[11px] font-bold uppercase tracking-[.14em] text-sage';
export default function ContactForm() {
  const send = (e) => { e.preventDefault(); const d = new FormData(e.currentTarget);
    const body = `Brand/Agency: ${d.get('brand')}\nContact: ${d.get('contact')}\nCategory: ${d.get('cat')}\n\n${d.get('brief')}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Directorial Inquiry – ' + d.get('brand'))}&body=${encodeURIComponent(body)}`; };
  return (<form onSubmit={send} className="card mt-7 grid gap-5 p-5">
    <div><label htmlFor="brand" className={lab}>Brand or Agency Name</label><input id="brand" name="brand" required autoComplete="organization" placeholder="e.g. Maison Du Caire / Ogilvy MENA" className={inp} /></div>
    <div><label htmlFor="contact" className={lab}>Direct Producer Contact</label><input id="contact" name="contact" required type="email" autoComplete="email" placeholder="producer@agency.com" className={inp} /></div>
    <div><label htmlFor="cat" className={lab}>Project Category</label><select id="cat" name="cat" className={inp}>{categories.map((c) => <option key={c}>{c}</option>)}</select></div>
    <div><label htmlFor="brief" className={lab}>Creative Brief Summary</label><textarea id="brief" name="brief" rows={3} placeholder="Share timeline, target audience, estimated shoot dates in Cairo or abroad…" className={inp} /></div>
    <button type="submit" className="btn-g w-full"><Icon n="send" size={16} />Submit Directorial Inquiry</button>
    <p className="text-center text-[11px] font-bold tracking-[.12em] text-cream/60">OR CONNECT DIRECTLY VIA AGENCY DESK<a href={`mailto:${site.email}`} className="mt-2 flex items-center justify-center gap-2 text-sm tracking-normal text-sage"><Icon n="mail" size={16} />{site.email}</a></p>
  </form>);
}
