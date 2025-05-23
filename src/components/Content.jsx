const Content = ({ content, isText, isImg }) => {
  return (
    <div id="nav" className="grid grid-cols-8 w-full h-[30%]">
      <div className="border border-blue-200 col-span-2"></div>
      <div className="relative col-span-4 p-2 float-left">
        {isText && (
          <p className="text-blue-600 font-bold w-[66%] text-4xl">{content}</p>
        )}
        {isImg && (
          <img
            className="p-2 absolute bottom-0"
            src="https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg"
          />
        )}
      </div>
      <div className="border border-blue-200 col-span-2"></div>
    </div>
  );
};

export default Content;
