import TopLine from "../../assets/top_line.svg";
import BottomLine from "../../assets/bottom_line.svg";
import DownArrow from "../../assets/down_arrow.svg";

export const Home = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col items-center justify-center relative gap-6"
    >
      <div className="">
        <h3 className="text-center">
          해가 길어지는 저녁,
          <br />
          저희의 시작을 함께해 주세요
        </h3>
      </div>
      <img src={TopLine} className="p-6 w-auto h-48 md:h-64" />
      <div className="w-full px-4 flex flex-row justify-between">
        <div className="flex-1 text-left">
          <h3 className="text-base font-sansKR">신랑</h3>
          <h1 className="name text-4xl md:text-5xl font-nanum">김준</h1>
        </div>
        <div className="flex-1 text-center">
          <h3 className="date text-3xl">05</h3>
          <div className="divider mx-16"></div>
          <h3 className="date text-3xl ">31</h3>
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-base font-sansKR">신부</h3>
          <h1 className="name text-4xl md:text-5xl font-nanum">정성윤</h1>
        </div>
      </div>
      <img src={BottomLine} className="p-6 w-auto h-48 md:h-64" />
      <div className="text-center">
        <h2 className="event-title text-2xl">2025.05.31</h2>
        <h3>
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
    </section>
  );
};
