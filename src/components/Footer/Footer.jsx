import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="px-10 py-10 lg:flex gap-10 grid grid-cols-2 lg:flex-row flex-col justify-between lg:items-center">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl">Socials</h2>
        <p className="text-gray-600 text-lg">
          <InstagramIcon className="!text-black" />
          Instagram
        </p>
        <p className="text-gray-600 text-lg">
          <XIcon className="!text-black" />X
        </p>
        <p className="text-gray-600 text-lg">
          <FacebookIcon className="!text-black" />
          Facebbok
        </p>
        <p className="text-gray-600 text-lg">
          <YouTubeIcon className="!text-black" />
          Youtube
        </p>
      </div>
      <div>
        <h2 className="font-bold text-xl">About</h2>
        <p className="text-gray-600 text-lg">Support Center</p>
        <p className="text-gray-600 text-lg">Customer Support</p>
        <p className="text-gray-600 text-lg">About us</p>
        <p className="text-gray-600 text-lg">Copyright</p>
      </div>
      <div>
        <h2 className="font-bold text-xl">Customer Care</h2>
        <p className="text-gray-600 text-lg">FAQ & Help</p>
        <p className="text-gray-600 text-lg">Shipping and delivery</p>
        <p className="text-gray-600 text-lg">Return and Exchanges</p>
      </div>
    </div>
  );
}
export default Footer;
