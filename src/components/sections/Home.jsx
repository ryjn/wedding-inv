import TopLine from "../../assets/top_line.svg";
import BottomLine from "../../assets/bottom_line.svg";
import DownArrow from "../../assets/down_arrow.svg";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen py-5 flex flex-col items-center justify-between relative"
      >
        <h3 className="text-base md:text-2xl text-center font-light">
          해가 길어지는 저녁,
          <br />
          저희의 시작을 함께해 주세요
        </h3>
        <img src={TopLine} className="w-auto h-36 md:h-auto" />
        <div className="w-[90%] md:w-[70%] flex flex-row justify-between items-center">
          <div className="flex-1 flex-row text-left space-y-3">
            <h3 className="text-xs md:text-base font-sansKR">신랑</h3>
            <h1 className="text-2xl md:text-5xl font-nanum tracking-wider">
              김준
            </h1>
          </div>
          <div className="flex-1 flex-row text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-nanum text-[var(--color-accent)]">
              05
            </h3>
            <hr className="border-t border-[var(--color-accent)] w-7 md:w-8 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-nanum text-[var(--color-accent)]">
              31
            </h3>
          </div>
          <div className="flex-1 flex-row text-right space-y-3">
            <h3 className="text-xs md:text-base font-sansKR">신부</h3>
            <h1 className="text-2xl md:text-5xl font-nanum tracking-tighter">
              정성윤
            </h1>
          </div>
        </div>
        <img src={BottomLine} className="w-auto h-36 md:h-auto" />
        <div className="text-center space-y-3">
          <h2 className="text-xl md:text-3xl font-nanum font-medium">
            2025.05.31
          </h2>
          <div className="">
            <h3 className="text-base md:text-2xl font-light">
              오후 5시, 오가헌
            </h3>
            <h3 className="text-base md:text-2xl font-light">
              광주광역시 동구 금남로4가 42
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="py-4 text-base md:text-2xl text-center">
            오가헌 찾아오시는 길
          </h3>
          <img src={DownArrow} className="w-3 md:w-4 h-auto mx-auto" />
        </div>
      </section>
    </RevealOnScroll>
  );
};
