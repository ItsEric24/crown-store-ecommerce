import Man from "/man-category.jpg";
import Woman from "/woman-category.jpg";
import Kids from "/kids-category.jpg";
import Glasses from "/glasses-category.jpg";
import Watch from "/watch-category.jpg";
import Sport from "/sports-category.jpg";
import Sneakers from "/sneakers-category.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "../CustomArrow/CustomArrow";

const cardData = [
  {
    id: 1,
    img: Man,
    title: "Man",
  },
  {
    id: 2,
    img: Woman,
    title: "Woman",
  },
  {
    id: 3,
    img: Kids,
    title: "Kids",
  },
  {
    id: 4,
    img: Glasses,
    title: "Glasses",
  },
  {
    id: 5,
    img: Watch,
    title: "Watch",
  },
  {
    id: 6,
    img: Sport,
    title: "Sport",
  },
  {
    id: 7,
    img: Sneakers,
    title: "Sneakers",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <CustomArrow />,
  prevArrow: <CustomArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

function FeaturedCategories() {
  return (
    <div className="w-full mt-10 flex flex-col p-10">
      <h2 className="font-bold lg:text-3xl md:text-2xl text-2xl capitalize mb-10">
        Shop by category
      </h2>
      <Slider {...settings}>
        {cardData.map((item) => (
          <div key={item.id} className="h-[200px]">
            <a href="#">
              <img
                src={item.img}
                alt="card-img"
                className="h-full rounded-md w-full object-cover"
              />
            </a>
            <div className="flex justify-center items-center">
              <h3 className="mt-5 font-semibold text-2xl">{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default FeaturedCategories;
