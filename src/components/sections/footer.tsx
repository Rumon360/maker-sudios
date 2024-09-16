import AnimationText from "../ui/animation-text";
import MovingBall from "../ui/movingball";

function Footer() {
  return (
    <div className="">
      <footer
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        className="hidden md:block relative h-[100vh] bg-[#edbfff]"
      >
        <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
          <div className="h-[100vh] sticky top-[calc(100vh-100vh)]">
            <Content />
          </div>
        </div>
      </footer>
      <footer className="md:hidden bg-[#edbfff] pb-10">
        <Content />
      </footer>
    </div>
  );
}

export default Footer;

function Content() {
  return (
    <div className="text-black pb-6 h-full flex flex-col justify-between max-w-[95%] mx-auto">
      <div>
        <div className="flex justify-between w-full items-center py-0 md:py-16 border-b border-black">
          <div>
            <AnimationText className="text-3xl md:text-6xl font-medium uppercase">
              Let's create an experience as{" "}
              <span className="md:hidden">remarkable as your business</span>
            </AnimationText>
            <AnimationText className="hidden md:block text-6xl font-medium uppercase">
              remarkable as your business
            </AnimationText>
          </div>
          <MovingBall
            text="Start a Project"
            className="hidden md:flex text-xl size-[200px] lg:size-[250px] bg-white"
          />
        </div>
        <div className="pt-10 md:pt-20">
          <div className="flex flex-col lg:flex-row justify-between text-xl md:text-3xl xl:text-4xl">
            <div>
              <h3>Don't miss out. Stay in the loop.</h3>
              <div className="pt-16">
                <div className="w-full md:w-[600px] flex items-center justify-between py-2 border-b border-black">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="placeholder:text-xl md:placeholder:text-3xl placeholder:text-zinc-500 flex-1 bg-transparent outline-none"
                  />
                  <button className="group px-6 py-1 rounded-full border border-black overflow-hidden relative bg-transparent text-sm md:text-lg capitalize flex justify-center items-center">
                    <span>View clients</span>
                    <div className="absolute rounded-full opacity-0 group-hover:opacity-100 duration-300 group-hover:scale-100 transition ease-in-out w-full h-full origin-center scale-50 -z-10 bg-white"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-16 sm:pt-20 md:pt-0">
              <p className="">hmk.rumon@gmail.com</p>
              <div className="flex text-xl md:text-2xl gap-20 w-full pt-10">
                <div>
                  <h4>Main Hubs</h4>
                  <ul className="flex flex-col text-base md:text-lg pt-2">
                    <li>DC</li>
                    <li>Maryland</li>
                    <li>Dhaka</li>
                  </ul>
                </div>
                <div>
                  <h4>Socials</h4>
                  <ul className="flex flex-col text-base md:text-lg pt-2">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://hmk360.vercel.app/" className="pt-10 md:pt-0 text-xl">
        © 2024 HMK
      </a>
    </div>
  );
}
