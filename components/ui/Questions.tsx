import i18n from "../../i18n";
import { useTranslation } from "next-i18next";

export type QuestionProps = {
  text: string;
};

export type QuestionsProps = {
  location: string;
  questions: QuestionProps[];
};

const Questions: React.FC<QuestionsProps> = ({ location, questions }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-xl mt-8 mb-4">{
      i18n.language === 'jp' ? location + t("questions") : 
      i18n.language === 'de' || i18n.language === 'cn' ? t("questions") + location + t("questions2")
      : t("questions") + " " + location}</h2>
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
