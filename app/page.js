import CategoryList from "./_components/CategoryList";
import Sliders from "./_components/Sliders";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  const categoryList = await GlobalApi.getCategoryList();

  return (
    <div className="p-10 px-16">
      {/* Slider  */}
      <Sliders sliderList={sliderList} />
      {/* CategoryList  */}
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
