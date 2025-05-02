import RandomNav from "@/components/randomnav.js";
import ShootingStar from "@/components/shooting_star";

export default function Home() {
  return (
    <div className="page">
      <ShootingStar/>
      <h1>The stars do not begin, they simply are.</h1>
      <p className="hint">A beginningless story whispers its name.</p>
      <RandomNav currentPath="/" />
    </div>
  );
}