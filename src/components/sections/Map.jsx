import { RevealOnScroll } from "../RevealOnScroll.jsx";
import MapImg from "../../assets/map.svg";
import DownArrow from "../../assets/down_arrow.svg";

export const Map = () => {
  return (
    <RevealOnScroll>
      <section
        id="map"
        className="min-h-screen p-10 flex flex-col items-center justify-between relative gap-5"
      >
        <div className="w-full h-auto">
          <img src={MapImg} className="" />
        </div>
        <div className="flex-1 space-y-5">
          <p className="text-center text-base md:text-2xl font-light">
            함께 바라본 순간들이
            <br />
            조용히 한 계절을 이루었습니다.
          </p>
          <p className="text-center text-base md:text-2xl font-light">
            노을이 물든 저녁,
            <br />
            새로운 계절에
            <br />첫 걸음을 내딛습니다.
          </p>
          <p className="text-center text-base md:text-2xl font-light">
            그 시작의 자리에
            <br />
            당신의 따뜻한 발걸음을 기다립니다.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="py-4 text-base md:text-2xl text-center">
            축하의 마음 전하시는 곳
          </h3>
          <img src={DownArrow} className="w-3 md:w-4 h-auto mx-auto" />
        </div>
      </section>
    </RevealOnScroll>
  );
};
