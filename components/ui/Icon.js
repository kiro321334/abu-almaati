const d = {
  check: 'M20 6L9 17l-5-5', verified: 'M12 3l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z|M9 12l2 2 4-4',
  play: 'M8 5v14l11-7z', mask: 'M4 5h9v7a4.5 4.5 0 0 1-9 0z|M7 9h.01M10 9h.01|M7 13c1 1 2 1 3 0|M16 7h4v6a4 4 0 0 1-4 4', clap: 'M3 9h18v11H3z|M3 9l2-5 4 1-2 4|M10 9l2-5 4 1-2 4',
  camera: 'M3 7h13v10H3z|M16 10l5-3v10l-5-3', pen: 'M4 6h10M4 11h7M4 16h5|M13 19l6-6 2 2-6 6h-2z', card: 'M3 5h18v14H3z|M8 11h.01|M5 16c1-2 5-2 6 0|M15 9h3M15 13h3',
  hanger: 'M12 8a2 2 0 1 0-2-2|M12 8v2l9 6a1 1 0 0 1-.6 1.8H3.6A1 1 0 0 1 3 16l9-6', send: 'M3 11l18-8-8 18-2-8z', mail: 'M3 5h18v14H3z|M3 7l9 7 9-7',
  arrow: 'M5 12h14M13 6l6 6-6 6', close: 'M6 6l12 12M18 6L6 18', back: 'M15 6l-6 6 6 6', volume: 'M4 9v6h4l5 4V5L8 9z|M17 9a4 4 0 0 1 0 6', book: 'M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3z|M21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z', full: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
};
export default function Icon({ n, size = 20, className = '', fill = false }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{d[n].split('|').map((p, i) => <path key={i} d={p} />)}</svg>;
}
