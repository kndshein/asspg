import { useState } from 'react';
import Question from './Question';
import Answer from './Answer';

export default function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <li className="mb-4 px-6 py-4 pb-5 rounded-md bg-gray-800">
      <Question question={question} open={open} handleOpen={handleOpen} />
      <Answer answer={answer} open={open} />
    </li>
  );
}
