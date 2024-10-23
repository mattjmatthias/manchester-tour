export type QuestionProps = {
  text: string;
};

export type QuestionsProps = {
  location: string;
  questions: QuestionProps[];
};

const Questions: React.FC<QuestionsProps> = ({ location, questions }) => {
  return (
    <>
      <h2 className="text-xl mt-8 mb-4">Questions to ask the AI about {location}</h2>
      <ul className="list-none">
      {questions.map((question: QuestionProps, i: number) => (
        <li key={i} className="flex mb-4">
          <span className="mr-2">~</span>
          <span className="flex-1 text-lg">{question.text}</span>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Questions;
