function FeatureContent({ items, title, description }) {
  return (
    <div className="flex flex-col items-center pt-6 max-w-xs">
      <img className="py-6" src={items} alt="" />
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-base text-center pt-2">{description}</p>
    </div>
  );
}

export default FeatureContent;
{
}
