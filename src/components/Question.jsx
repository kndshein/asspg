import { CgChevronDown, CgChevronUp } from 'react-icons/cg';

export default function Question({ question, open, handleOpen }) {
  return (
    <button className="w-full text-sky-500" onClick={handleOpen}>
      <div className="flex justify-between items-start">
        <p className="text-left">{question}</p>
        <div className="pt-2">{open ? <CgChevronUp /> : <CgChevronDown />}</div>
      </div>
    </button>
  );
}
