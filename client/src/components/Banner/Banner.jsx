import { Link } from "react-router-dom";
import useBlogData from "../../api/useBlogData";
import { format, parseISO } from "date-fns";

const Banner = () => {
  const { blogs } = useBlogData();

  return (
    <Link to={`/blogs/${blogs[1]?._id}`}>
      {/* // TODO will add featured blog here later instead of blogs[1] */}
      <section className="relative">
        <img
          className="xl:max-w-[1216px] xl:max-h-[600px] xl:min-w-[1216px] lg:min-h-[600px] lg:rounded-xl mx-auto"
          src={blogs[1]?.photoUrl}
          alt={blogs[1]?.title}
        />
        <div className="lg:min-w-[518px] lg:min-h-[304px] rounded-xl  md:-bottom-20 lg:-bottom-20 border left-16 md:left-32 lg:left-24 bg-[#FFF] lg:p-10 p-3 md:absolute border-[#E8E8EA] shadow-md shadow-[#181A2A1F] dark:bg-[#181A2A] dark:border-[#242535]">
          <div className="max-w-[518px]">
            <span className="bg-[#4B6BFB] rounded-md text-white px-2 py-1 text-sm text-center mt-2 lg:mt-0">
              {blogs[1]?.category}
            </span>
            <h1 className="text-[#181A2A] dark:text-white text-xl mt-4 mb-6 lg:text-4xl font-semibold max-w-[400px] lg:max-w-[518px] ">
              {blogs[1]?.title}
            </h1>
            <div className="flex gap-3 items-center mt-auto dark:text-[#97989F]">
              <img
                src={blogs[1]?.authorImg}
                className="max-w-[36px] max-h-[36px] rounded-full"
                alt=""
              />
              <p className="text-[#97989F] text-base font-medium">
                {blogs[1]?.authorName}
              </p>
              <p className="ml-2 font-normal text-base text-[#97989F]">
                {blogs[1]?.published && !isNaN(new Date(blogs[1].published))
                  ? format(parseISO(blogs[1].published), "MMMM dd, yyyy")
                  : null}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Banner;
