import Title from "./Title";
import FeatureContent from "./FeatureContent";
import { FeatureItems } from "../FeatureItems";

function Feature() {
  return (
    <section className="section" id="feature">
      <Title title="Kenapa Tarsabi?" subtitle="Kenapa Kami" />
      <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:flex-wrap md:max-w-[80rem]">
        {FeatureItems.map((FeatureItem, index) => (
          <FeatureContent
            key={index}
            items={FeatureItem.icon}
            title={FeatureItem.title}
            description={FeatureItem.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Feature;
