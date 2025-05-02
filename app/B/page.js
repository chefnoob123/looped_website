import RandomNav from '@/components/randomnav';
export default function PageB() {
  return (
    <div className="page">
      <h1>Even the galaxy curves in endless repetition.</h1>
      <p className="hint">Everything that ends begins again. E—what a curious symbol to start forever.</p>
      <RandomNav currentPath="/b" />
    </div>
  );
}