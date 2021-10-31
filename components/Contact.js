import Title from "./Title";

function Contact() {
  return (
    <div className="section" id="contact">
      <Title title="Hubungi Kami" subtitle="Contact" />
      <img
        src="../assets/contact.svg"
        className="my-6 w-[25rem] md:w-[35rem]"
        alt=""
      />

      <a
        href="https://api.whatsapp.com/send?phone=6281311740869&text=Halo%20kak%2C%20apakah%20bisa%20mengerjakan%20tugas%20%5Bnama%20tugas%5D%3F"
        target="_blank"
      >
        <button className="bg-[#F6147A] font-bold rounded-xl text-white py-4 px-10 transform ease-out duration-500 hover:-translate-y-2">
          Pesan Sekarang
        </button>
      </a>

      <div className="mt-8 flex flex-col items-center gap-4">
        <a href="mailto: abc@example.com" target="_blank">
          <button className="flex gap-2 items-center justify-center transform ease-out duration-500 hover:-translate-y-2">
            <img src="../assets/mail.svg" alt="" />
            <p>tarsabi@mail.com</p>
          </button>
        </a>
        <a
          href="https://api.WhatsApp.com/send?phone=6281311740869"
          target="_blank"
        >
          <button className="flex gap-2 items-center justify-center transform ease-out duration-500 hover:-translate-y-2">
            <img src="../assets/whatsapp.svg" alt="" />
            <p>0831-1922-2311</p>
          </button>
        </a>
        <a href="https://line.me" target="_blank">
          <button className="flex gap-2 items-center justify-center transform ease-out duration-500 hover:-translate-y-2">
            <img src="../assets/line.svg" alt="" />
            <p>@tarsabi</p>
          </button>
        </a>
        <a href="https://instagram.com/tarsabi" target="_blank">
          <button className="flex gap-2 items-center justify-center transform ease-out duration-500 hover:-translate-y-2">
            <img src="../assets/instagram.svg" alt="" />
            <p>@tarsabi</p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
