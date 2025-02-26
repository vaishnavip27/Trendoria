const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-14 py-3">
      <div className="flex items-center gap-20 text-sm font-semibold text-lg">
        <div>COLLECTIONS</div>
        <div>ABOUT</div>
      </div>
      <div className="flex items-center text-3xl font-black">
        <div>TRENDORIA</div>
      </div>
      <div className="flex items-center gap-20 text-sm font-semibold text-lg ">
        <div>SEARCH</div>
        <div>CART</div>
      </div>
    </div>
  );
};

export default Navbar;
