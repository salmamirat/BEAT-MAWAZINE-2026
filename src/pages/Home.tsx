export const Home = () => {
  return (
    <div className="bg-[#020817] min-h-screen text-white px-6 md:px-16 py-10">
      <section className="flex flex-col items-center text-center mt-20">
        <div className="max-w-xl">
          <div className="bg-[#1c2b45] px-4 py-2 rounded-full text-green-400 w-fit mb-8">
            📅 19 → 27 Juin 2026 • Rabat
          </div>


          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Vivez le rythme
            <br />
            <span className="text-orange-400">
              du monde.
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-9 mt-8">
            Découvrez le programme, gérez votre planning
            et gardez une mémoire unique de vos concerts.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-orange-400 text-black px-7 py-4 rounded-2xl font-bold hover:bg-orange-500 duration-300">
              Voir Programme
            </button>

            <button className="border border-slate-700 px-7 py-4 rounded-2xl hover:bg-slate-900 duration-300">
              Mon Passeport
            </button>

          </div>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-[30px] overflow-hidden w-full max-w-lg mt-16 shadow-2xl">

          <img src=" src/assets/Festival.jpg "
            className="w-full h-\[300px\] object-cover"
          />

          <div className="p-8">

            <p className="text-green-400 text-sm">
              Rabat • OLM Souissi
            </p>

            <h2 className="text-5xl text font-bold mt-3">
              The Weeknd
            </h2>

            <p className="text-wh mt-5 leading-8">
              Une performance exceptionnelle pour clôturer la première
              journée du festival sur la plus grande scène de Rabat.
            </p>

            <button className=" mt-8 bg-orange-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-orange-500 duration-300">
              J'y étais
            </button>

          </div>
        </div>

      </section>

    </div>
  );
};