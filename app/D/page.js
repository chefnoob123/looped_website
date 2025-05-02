import RandomNav from '@/components/randomnav';
export default function PageD() {
  return (
    <div className="page">
      <h1>What word describes the unbroken path, the loop beyond time, the ultimate cycle?</h1>
      <p className="hint">It is not infinite—it’s eternal.</p>
      <RandomNav currentPath="/d" />
    </div>
  );
}