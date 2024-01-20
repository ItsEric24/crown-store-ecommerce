import Nike from "/nike-brand.png";
import Dior from "/dior-brand.png";
import CalvinKlein from "/calvin-klein-brand.png";
import LouisVuitton from "/louis-vuitton-brand.png";

const brands = [Nike, Dior, CalvinKlein, LouisVuitton];

function Brands() {
  return (
    <div className="w-full p-10">
      <h2 className="font-bold lg:text-3xl md:text-2xl text-2xl capitalize mb-10">
        Top Brands
      </h2>
      <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-center gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="p-4 shadow-lg bg-gray-100 rounded-xl flex justify-center items-center"
          >
            <img
              src={brand}
              alt="brand-img"
              className="w-44 h-44 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Brands;
