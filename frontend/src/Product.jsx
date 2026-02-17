export default function ProductDetail() {
    return (
      <div className="relative min-h-screen w-full gradient-bg overflow-x-hidden font-sans text-[#1b130e]">
  
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 border-b border-primary/10 glass-panel">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-bold tracking-tight">CUDLOO</h2>
            <nav className="hidden lg:flex items-center gap-10">
              <span>Shop</span>
              <span>Philosophy</span>
              <span>Safety</span>
              <span>Journal</span>
            </nav>
          </div>
  
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="material-symbols-outlined">person</span>
          </div>
        </header>
  
        {/* MAIN */}
        <main className="flex flex-col lg:flex-row min-h-screen pt-24">
  
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_PcG-NwmjMV40et0HYQ7mDhNN52ck8-ZTYssv_jF4MQTR7fjd7P952xH2IYKC93pl2SQ_GDd_bcG6XqoWo89j8qj4ZncXm14TCkMy4XSvkFV0l67vnsdx70RcEC-3BqIvoTQAjn-BKFRdYBcbeb_1brbAVeQpzapsClnHjmclW-aYq0NOcIyC93paamzLFbVvSUPTbkETeIE16SNpEENfZ-2jK8VCOkID0UR11dpvM1RswR6kFDzuUiDpTwAbjXn7E1xNqWxwH_DY"
              className="max-w-lg w-full"
            />
          </div>
  
          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
            <div className="max-w-[540px] w-full flex flex-col gap-10">
  
              <h1 className="text-5xl font-black leading-tight">
                Gentle Nourishing <br/> Baby Oil
              </h1>
  
              <p className="text-lg text-[#1b130e]/70">
                Dermatologically tested for the most sensitive skin.
              </p>
  
              {/* Quantity */}
              <div className="flex items-center justify-between glass-panel p-4 rounded-full">
                <span>Quantity</span>
                <div className="flex gap-4">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
  
              {/* PRICE BUTTON */}
              <button className="w-full h-16 bg-[#e87d30] text-white font-bold rounded-full primary-glow">
                Pre-order Now — $48.00 →
              </button>
  
              {/* DETAILS BELOW PRICE */}
              <div className="glass-panel p-8 rounded-xl">
                Organic jojoba oil + calendula. No parabens.
              </div>
  
            </div>
          </div>
        </main>
  
        {/* WATERMARK */}
        <div className="fixed bottom-10 left-10 text-[#1b130e]/10 text-9xl font-black">
          CUDLOO
        </div>
  
      </div>
    );
  }
  