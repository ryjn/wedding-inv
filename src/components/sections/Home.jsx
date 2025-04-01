import TopLine from "../../assets/top_line.svg";
import BottomLine from "../../assets/bottom_line.svg";
import DownArrow from "../../assets/down_arrow.svg";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col items-center justify-center relative gap-6"
    >
      <RevealOnScroll>
        <h3 className="text-base md:text-2xl text-center">
          해가 길어지는 저녁,
          <br />
          저희의 시작을 함께해 주세요
        </h3>
        <img src={TopLine} className="p-6 w-auto h-48 md:h-64" />
        <div className="w-[90%] md:w-[75%] flex flex-row justify-between">
          <div className="flex-1 flex-row text-left">
            <h3 className="text-sm md:text-base font-sansKR">신랑</h3>
            <h1 className="name text-3xl md:text-5xl font-nanum">김준</h1>
          </div>
          <div className="flex-1 flex-row text-center space-y-3">
            <h3 className="date text-2xl md:text-3xl">05</h3>
            <hr className="border-t border-[var(--color-accent)] w-10 md:w-15 mx-auto" />
            <h3 className="date text-2xl md:text-3xl ">31</h3>
          </div>
          <div className="flex-1 flex-row text-right">
            <h3 className="text-sm md:text-base font-sansKR">신부</h3>
            <h1 className="name text-3xl md:text-5xl font-nanum">정성윤</h1>
          </div>
        </div>
        <img src={BottomLine} className="p-6 w-auto h-48 md:h-64" />
        <div className="text-center">
          <h2 className="event-title text-base md:text-2xl font-bold">
            2025.05.31
          </h2>
          <h3 className="text-base md:text-2xl">
            오후 5시, 오가헌
            <br />
            광주광역시 동구 금남로4가 42
          </h3>
        </div>
        <a href="#map">
          <img
            src={DownArrow}
            className="nav-arrow p-6 w-15 h-auto cursor-pointer"
          />
        </a>
      </RevealOnScroll>
    </section>
  );
};
