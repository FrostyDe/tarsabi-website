import Title from "./Title";

function About() {
  return (
    <section className="section" id="about">
      <Title title="Apasih Tarsabi?" subtitle="Tentang Kami" />
      <div className="flex flex-col gap-2 md:flex-row lg:gap-10">
        <img src="../assets/about.svg" className="w-80 mb-4" alt="" />
        <p className="text-center max-w-[23rem] md:max-w-[30rem] py-6">
          Tarsabi adalah jasa tugas yang siap membantumu menyelesaikan
          tugas-tugasmu. Buat kamu yang tugasnya numpuk banget sampai bingung
          mau ngerjain yang mana dulu atau sibuk banyak kegiatan lain, di
          TARSABI aja buat solusi tugasmu!
        </p>
      </div>
    </section>
  );
}

export default About;
