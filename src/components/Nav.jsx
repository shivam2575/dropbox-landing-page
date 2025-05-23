const Nav = () => {
  return (
    <div id="nav" className="grid grid-cols-8 w-full h-[5%]">
      <div className="border border-blue-200 col-span-2"></div>
      <div className="col-span-4 grid grid-cols-3">
        <div className="border border-blue-200"></div>
        <div className="border border-blue-200"></div>
        <div className="border border-blue-200"></div>
      </div>
      <div className="border border-blue-200 col-span-2"></div>
    </div>
  );
};

export default Nav;
