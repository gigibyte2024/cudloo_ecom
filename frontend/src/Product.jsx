import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="relative min-h-screen w-full gradient-bg overflow-x-hidden font-sans">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 border-b border-primary/10 glass-panel bg-white/40 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-bold tracking-tight">CUDLOO</h2>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row min-h-screen pt-24">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
          <div className="w-full max-w-lg aspect-[4/5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_PcG-NwmjMV40et0HYQ7mDhNN52ck8-ZTYssv_jF4MQTR7fjd7P952xH2IYKC93pl2SQ_GDd_bcG6XqoWo89j8qj4ZncXm14TCkMy4XSvkFV0l67vnsdx70RcEC-3BqIvoTQAjn-BKFRdYBcbeb_1brbAVeQpzapsClnHjmclW-aYq0NOcIyC93paamzLFbVvSUPTbkETeIE16SNpEENfZ-2jK8VCOkID0UR11dpvM1RswR6kFDzuUiDpTwAbjXn7E1xNqWxwH_DY"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
          <div className="max-w-[540px] w-full flex flex-col gap-10">

            <h1 className="text-5xl font-black">
              Gentle Nourishing <br /> Baby Oil
            </h1>

            <p className="text-lg text-slate-500">
              Dermatologically tested for newborn skin.
            </p>

            {/* Quantity */}
            <div className="flex items-center justify-between bg-white/40 p-4 rounded-full">
              <span>Quantity</span>
              <div className="flex gap-4">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            {/* Button */}
            <button className="w-full h-16 bg-orange-500 text-white font-bold rounded-full">
              Pre-order — $48.00
            </button>

            <div className="bg-white/40 p-6 rounded-xl">
              Organic jojoba oil + calendula. No parabens.
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
