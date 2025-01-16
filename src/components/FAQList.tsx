import { FAQ_ITEMS } from '@/constants/faqData';

import FAQAccordion from './FAQAccordion';

const FAQList = () => {
  return (
    <ul className="flex flex-col gap-y-3">
      {FAQ_ITEMS.map(({ question, answer }) => (
        <li key={question}>
          <FAQAccordion questionText={question} answerText={answer} />
        </li>
      ))}
    </ul>
  );
};

export default FAQList;
