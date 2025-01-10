import { activityList } from '../constants';

const NetworkingTabItem = () => {
  return (
    <div>
      <section aria-label="스터디 외 활동" className="flex w-full flex-col gap-y-10">
        <h2 className="whitespace-pre-line text-white galmuri11-headline-3">
          {`스터디 이외에도\n여러가지 활동을 해요`}
        </h2>
        <ul className="flex w-full flex-row flex-wrap gap-x-2 gap-y-2">
          {activityList.map((item, index) => (
            <li
              key={index}
              className="box-border w-fit rounded-[10px] bg-cotam-blue-90 px-3 py-2 text-white galmuri11-body-1">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NetworkingTabItem;
