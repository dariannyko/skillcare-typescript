import Clock from "@/assets/Icons/Clock.svg";

type Props = {
  classImage: string;
  teacherImage: string;
  teacherName: string;
  field: string;
  course: string;
  duration: string;
  description?: string;
  newPrice: string;
  oldPrice: string;
  rate: string;
  stars: string;
};

const ClassItem = ({
  classImage,
  teacherImage,
  teacherName,
  field,
  course,
  duration,
  description,
  newPrice,
  oldPrice,
  rate,
  stars,
}: Props) => {
let fieldBackground = "bg-purple-100";
let filedCircle = "bg-purple-500";

  if (field === "Machine") {
    fieldBackground = "bg-blue-100";
     filedCircle = "bg-blue-500";
  }
  if (field === "Data Science") {
    fieldBackground = "bg-green-100";
     filedCircle = "bg-green-500";
  }
  if (field === "Mobile App") {
    fieldBackground = "bg-orange-100";
     filedCircle = "bg-orange-500";
  }

  return (
    <div className="relative max-w-[364px] w-full h-full rounded-md bg-white font-montserrat font-medium shadow-sm flex flex-col shrink-0 mx-auto">
      <img
        src={classImage}
        alt={`${classImage}`}
        className="mb-4 rounded-t-md"
      />
      <div className=" mb-7 px-5 w-full h-full flex flex-col">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-1.5">
          <div className="flex items-center">
            <img src={teacherImage} className="mr-2 w-[40px] h-[40px]"/>
            <p className="text-sm">{teacherName}</p>
          </div>
          <div
            className={`rounded-s flex items-center gap-1.5 ${fieldBackground} p-2 text-xs`}
          >
            <div
              className={`h-[5px] w-[5px] rounded-full ${filedCircle}`}
            ></div>
            <p className="text-xs">{field}</p>
          </div>
        </div>
        <h3 className="mb-2.5 text-base font-semibold">{course}</h3>
        <div className="mb-6 flex items-center justify-between flex-wrap text-sm gap-3">
          <div className="flex items-center">
            <img src={Clock} alt="" className="mr-3" />
            <p className="text-gray-50">{duration}</p>
          </div>
        <div className={`rounded-sm  py-2 px-3 min-h-[36px] ${description && 'bg-yellow-100'}`}>
            {description}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-auto gap-3">
          <div className="flex items-end gap-2 text-xl font-semibold">
            <p>{newPrice}</p>
            <span className="text-base font-medium text-gray-50 line-through">
              {oldPrice}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-50">
            <p>{rate}</p>
            <img src={stars} alt="" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClassItem };
