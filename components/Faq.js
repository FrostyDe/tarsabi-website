import Title from "./Title";
import Collapsible from "react-collapsible";
import { Quesions } from "../Questions";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Faq() {
  return (
    <section className="section" id="faq">
      <Title title="FAQ" subtitle="Frequency Asked Quesion" />
      <div>
        <div className="flex flex-col items-baseline justify-center md:flex-row md:flex-wrap md:max-w-[60rem] md:gap-4">
          {Quesions.map((question, index) => (
            <div
              key="index"
              className="max-w-[20rem] mt-4 mb-2 py-4 px-4 border-2 border-[#F6147A] rounded-md"
            >
              <Collapsible
                trigger={
                  <div className="flex justify-between">
                    <span>{question.pertanyaan}</span>
                    <ChevronDownIcon className="w-6 text-[#F6147A]" />
                  </div>
                }
                triggerClassName="font-bold text-md"
                triggerOpenedClassName="font-bold text-md"
                transitionTime={200}
                easing="ease-in-out"
              >
                <p className="bg-gray-50 p-4 rounded-lg">{question.jawaban}</p>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
