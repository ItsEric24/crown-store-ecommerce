/* eslint-disable react/prop-types */

function ProductCard(props) {
  const { img, title, desc, price } = props.items;
  return (
    <div className="w-full flex flex-col rounded-lg shadow-xl">
      <div className="h-96 flex bg-gray-100 justify-center rounded-lg items-center">
        <a href="#">
          <img
            src={img}
            alt="card-img"
            className="w-60 h-60 object-contain rounded-lg hover:scale-110 transition-all ease-in-out duration-500"
          />
        </a>
      </div>
      <div className="p-4">
        <div className="mb-2 flex flex-col gap-2">
          <h3 color="black" className="font-semibold text-lg">
            {title}
          </h3>
          <p color="blue-grey" className="font-normal text-gray-500">
            {desc}
          </p>
          <p color="black" className="font-semibold">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
