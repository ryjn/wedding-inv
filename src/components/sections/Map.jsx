import { RevealOnScroll } from "../RevealOnScroll.jsx";
import MapImg from "../../assets/map.svg";
import DownArrow from "../../assets/down_arrow.svg";

export const Map = () => {
  return (
    <RevealOnScroll>
      <section
        id="map"
        className="h-screen p-10 flex flex-col items-center justify-between relative"
      >
        <h3 className="flex-1 text-base md:text-2xl text-center">
          오가헌 찾아오시는 길
        </h3>
        <img src={MapImg} className="flex-1" />
        <h3 className="flex-1 text-base md:text-2xl">
          광주광역시 동구 금남로4가 42
        </h3>
        <a href="#contact">
          <img src={DownArrow} className="flex-1 w-4 h-auto cursor-pointer" />
        </a>
      </section>
    </RevealOnScroll>
  );
};
