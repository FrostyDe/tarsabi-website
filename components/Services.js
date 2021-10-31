import Title from "./Title";
import { ServiceItems } from "../ServiceItems";

function Services() {
  return (
    <section className="section" id="services">
      <Title title="Apa aja yang bisa kami kerjakan?" subtitle="Services" />
      <div className="flex justify-between items-center flex-wrap md:max-w-[60rem]">
        {ServiceItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6147A] text-white font-bold text-sm rounded-md mx-4 my-2 px-6 py-2 flex-1 text-center"
          >
            {item.task}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
