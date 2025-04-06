export default function Mission() {
  return (
    <section className="relative w-full h-[540px] bg-[#726F84] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0F0D1D] opacity-75"></div>

      {/* Content container */}
      <main className="relative z-10 w-full max-w-[1920px] px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-[40px] font-bold leading-tight mb-8">
            MISSION IS TO PROTECT <br />
            YOUR BUSINESSES & <br />
            MUCH MORE
          </h1>

          <button className="px-8 py-4 bg-blue text-white text-sm font-semibold rounded-md transition duration-300">
            DISCOVER MORE
          </button>
        </div>
      </main>
    </section>
  );
}
