import Tshirt from "/polo-t-shirt.png";
import Watch from "/casio-watch.png";
import Sneakers from "/jordan-sneakers.png";
import SunGlass from "/ray-ban-glasses.png";
import Sneakers2 from "/blue-sneakers.png";
import ProductCard from "../ProductCard/ProductCard";

const cardData = [
  {
    id: 1,
    img: Tshirt,
    title: "Green Polo Shirt",
    desc: "Lorem ipsum do set",
    price: "5.80",
  },
  {
    id: 2,
    img: Watch,
    title: "Casio Watch",
    desc: "Lorem ipsum do set",
    price: "34.50",
  },
  {
    id: 3,
    img: Sneakers,
    title: "Black Jordan Sneakers",
    desc: "Lorem ipsum do set",
    price: "15.35",
  },
  {
    id: 4,
    img: SunGlass,
    title: "Ray Ban Glasses",
    desc: "Lorem ipsum do set",
    price: "25.15",
  },
  {
    id: 5,
    img: Sneakers2,
    title: "Nike Blue Sneakers",
    desc: "Lorem ipsum do set",
    price: "10.20",
  },
];

function FeaturedProduct() {
  return (
    <div className="w-full flex flex-col p-10">
      <h2 className="font-bold lg:text-3xl md:text-2xl text-2xl capitalize mb-10">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item) => (
          <ProductCard key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}
export default FeaturedProduct;
