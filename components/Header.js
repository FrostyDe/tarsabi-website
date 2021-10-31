function Header() {
  return (
    <div
      className="py-16 pt-36 lg:pt-40 flex flex-col items-center justify-center md:flex-row-reverse gap-4 lg:gap-20"
      id="home"
    >
      <div className="relative">
        <img
          className="absolute -left-8 transition animate-bounce-slow"
          src="../assets/cover1.svg"
          alt=""
        />
        <img className="mt-12 relative" src="../assets/cover2.svg" alt="" />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center">
        <h1 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] py-10 text-center md:text-left max-w-xs md:max-w-lg lg:max-w-xl">
          Pengen nyantai tapi tugas numpuk?
        </h1>
        <a href="#contact">
          <button className="bg-[#F6147A] font-bold rounded-xl text-white py-4 px-10 transform ease-out duration-500 hover:-translate-y-2">
            Pesan Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
