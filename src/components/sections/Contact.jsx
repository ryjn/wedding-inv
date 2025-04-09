import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <>
      <RevealOnScroll>
        <section
          id="contact"
          className="min-h-screen p-10 flex flex-col justify-center items-center relative gap-5"
        >
          <div className="flex w-[90%] md:w-[70%] justify-between items-center">
            <h3 className="text-left font-medium">신부측</h3>
            <div className="flex-grow border-t border-gray-300 mx-4"></div>
            <p className="text-right">국민 정성윤 774202-01-182819</p>
          </div>
          <div className="flex w-[90%] md:w-[70%] justify-between items-center">
            <h3 className="text-left font-medium">신랑측</h3>
            <div className="flex-grow border-t border-gray-300 mx-4"></div>
            <p className="text-right">219910-56-953407</p>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
};
