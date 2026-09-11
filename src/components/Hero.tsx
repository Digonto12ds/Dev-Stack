import heroImg from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* text button */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            Build Your Ideal
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--brand-gradient)" }}>
              Development Stack
            </span>
          </h1>
          <p className="text-slate-600">
            Explore frontend, backend, database, and tooling options,<br/>compare
            them side by side, and put together the stack that fits <br/>your next
            project.
          </p>

          <div className="flex gap-4 my-3">
            <button className="px-6 py-3 rounded-2xl text-white font-semibold "style={{ backgroundImage: "var(--brand-gradient)" }}>Explore Technologies</button>
            <button className="text-gray-700 border-2 border-gray-200 rounded-2xl px-7 py-3">Learn More</button>

          </div>
        </div>
        {/* img */}
        <div>
            <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
