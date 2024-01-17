import Image from "next/image";
import ClassType from "@/src/components/Slide/ClassType";
const Card = ({ data }) => {
  return (
    <div className="px-4 py-5 rounded-3xl relative min-h-[400px] w-[340px] ">
      <Image src={data.image} fill alt="Image Card" className="rounded-3xl" />
      <div
        className="absolute w-full h-full flex flex-col justify-between right-0 top-0 rounded-3xl px-4 py-4"
        style={{
          background:
            "linear-gradient(to top, black, rgba(0, 0, 0, 0.6), transparent)",
        }}
      >
        <button
          type="button"
          className=" ml-56 py-2 px-2 bg-btn rounded-3xl text-bgColor text-sm "
        >
          login
        </button>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-lg text-bgColor text-nowrap ">
            {data.className}
          </h2>
          <div className="flex items-center text-bgColor  gap-4">
            <ClassType item={data.classType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;