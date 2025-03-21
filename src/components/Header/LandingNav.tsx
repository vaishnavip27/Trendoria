import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-14 py-3">
      <div className="flex items-center gap-20 text-sm font-semibold ">
        <div>COLLECTIONS</div>
        <div>ABOUT</div>
      </div>
      <div className="flex items-center text-3xl font-black">
        <div>TRENDORIA</div>
      </div>
      <div className="flex items-center gap-20 text-sm font-semibold ">
        <div>SEARCH</div>
        <button
          onClick={() => navigate("/auth")}
          className="bg-black text-white py-2.5 px-8 font-normal hover:bg-gray-800 cursor-pointer"
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
