function Email() {
  return (
    <div className="flex my-8 flex-col lg:flex-row gap-20 px-10 py-20 bg-gray-100 justify-between items-center">
      <div className="flex flex-col justify-center flex-1 gap-1">
        <h2 className="text-3xl font-medium">Get in touch with us</h2>
        <p className="text-base text-gray-500 font-medium">
          Subscribe to our newsletter
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Write your email here"
          className="border border-gray-400 placeholder:text-gray-600 rounded-lg w-full text-base p-5 outline-none"
        />
        <button className="p-5 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all ease-in-out duration-500 text-white outline-none border-0 text-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
}
export default Email;
