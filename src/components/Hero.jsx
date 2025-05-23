import { heroText } from "../utils/constants";
import Content from "./Content";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <Nav />
      <Content isText={true} content={heroText} />
      <Content />
      <Content isImg={true} />
      <Nav />
    </div>
  );
};

export default Hero;
