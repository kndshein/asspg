export default function Answer({ answer, open }) {
  return <>{open && <p className="mt-2 text-gray-400">{answer}</p>}</>;
}
