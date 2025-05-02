import Link from 'next/link';
export default function EternityPage() {
  return (
    <div className="page">
      <h1>You broke the cycle.</h1>
      <p>The keyword was known only to those who saw beyond the spiral.</p>
      <p>Next Clue: <strong>&Omega;</strong></p>
      <Link href="/nextchallenge">Continue</Link>
    </div>
  );
}