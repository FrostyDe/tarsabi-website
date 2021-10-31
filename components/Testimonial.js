import Title from "./Title";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TesimonialImages } from "../TestimonialImages";

function Testimonial() {
  return (
    <section className="section" id="testimonial">
      <Title title="Testimoni" subtitle="Testimoni pelanggan setia Tarsabi" />
      <div className="max-w-[30rem]">
        <Carousel
          infiniteLoop
          autoPlay
          swipeable
          emulateTouch
          interval="5000"
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {TesimonialImages.map((img, index) => (
            <div
              key={index}
              className="rounded-[2rem] text-center overflow-hidden"
            >
              <img src={img.src} className="bg-contain" alt={img.name} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonial;
