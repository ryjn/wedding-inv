import DownArrow from "../../assets/down_arrow.svg";
import TopLine from "../../assets/top_line.svg";
import BottomLine from "../../assets/bottom_line.svg";

export const Home = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="flex justify-center">
        <h3 className="text-center">
          해가 길어지는 저녁,
          <br />
          저희의 시작을 함께해 주세요
        </h3>
      </div>
      <img src={TopLine} />
      <div className="flex justify-center items-center">
        <div className="flex-1 text-left">
          <h3 className="text-base">신랑</h3>
          <h1 className="name text-5xl">김준</h1>
        </div>
        <div className="flex-1 text-center gap-4 w-16">
          <h3 className="date text-4xl">05</h3>
          <div>ㅡ</div>
          <h3 className="date text-4xl ">31</h3>
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-base">신부</h3>
          <h1 className="name text-5xl">정성윤</h1>
        </div>
      </div>
      <img src={BottomLine} />
      <div className="text-center">
        <h2 className="text-3xl">2025.05.31</h2>
        <h3>
          오후 5시, 오가헌
          <br />
          광주광역시 동구 금남로4가 42
        </h3>
      </div>
      <img src={DownArrow} />
    </section>
  );
};
