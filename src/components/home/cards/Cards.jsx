const Cards = ({ data }) => {
  return (
    <div className="px-4 py-4 rounded-2xl bg-bgColor shadow-2xl flex flex-col gap-3 items-center justify-center ">
      <div className=" text-bgColor font-bold bg-btn px-3 py-3 w-14 h-14 rounded-full flex items-center justify-center">
        {data?.icon}
      </div>
      <div className=" text-dark font-black text-3xl">{data?.number}</div>
      <div className=" text-dark text-md font-medium text-center">
        {data?.title}
      </div>
    </div>
  );
};

export default Cards;
