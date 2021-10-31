function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[18px]">{title}</h1>
      <p className="font-light text-[12px] text-[#F6147A] mb-6">{subtitle}</p>
    </div>
  );
}

export default Title;
