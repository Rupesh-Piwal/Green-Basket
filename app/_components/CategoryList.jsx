import Image from "next/image";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2 ">
        {categoryList.map((category, index) => (
          <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-[5px] group mt-2 bg-green-50 hover:cursor-pointer hover:bg-green-200 ">
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  category?.attributes?.icon?.data?.[0]?.attributes?.formats
                    ?.thumbnail?.url ||
                category?.attributes?.icon?.data?.[0]?.attributes?.url
              }
              unoptimized={true}
              width={50}
              height={50}
              alt="icon"
              className="group-hover:scale-125 transition-all ease-in-out"
            ></Image>
            <h2 className="text-center text-green-800 ">
              {category.attributes.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
