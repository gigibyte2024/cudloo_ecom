import { useState } from "react";
import { motion } from "framer-motion";

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";


export default function ProductDetail() {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("ingredients");
  // const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const price = 1499;

  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  return (
    <div className="relative min-h-screen w-full gradient-bg overflow-x-hidden font-sans text-[#1b130e]">
      <Navbar />
      <BackButton />
      <main className="flex flex-col lg:flex-row min-h-screen pt-24">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 relative overflow-hidden">

          <motion.div
            className="relative w-full max-w-lg aspect-[4/5]"
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <motion.div
              whileHover={{ rotate: -3, scale: 1.05 }}
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_PcG-NwmjMV40et0HYQ7mDhNN52ck8-ZTYssv_jF4MQTR7fjd7P952xH2IYKC93pl2SQ_GDd_bcG6XqoWo89j8qj4ZncXm14TCkMy4XSvkFV0l67vnsdx70RcEC-3BqIvoTQAjn-BKFRdYBcbeb_1brbAVeQpzapsClnHjmclW-aYq0NOcIyC93paamzLFbVvSUPTbkETeIE16SNpEENfZ-2jK8VCOkID0UR11dpvM1RswR6kFDzuUiDpTwAbjXn7E1xNqWxwH_DY")'
              }}
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
          <div className="max-w-[540px] w-full flex flex-col gap-10">

          <button
  onClick={() => navigate("/catalog")}
  className="text-sm text-primary underline"
>
  ← Back to Collection
</button>

<h1 className="font-display text-5xl font-black leading-tight tracking-tight">
  Gentle Nourishing <br /> Baby Oil
</h1>

            <p className="text-lg leading-relaxed">
              Dermatologically tested for the most sensitive skin.
            </p>

            {/* QUANTITY */}
            <div className="flex items-center justify-between glass-panel p-4 rounded-full">
              <p>Quantity</p>

              <div className="flex items-center gap-4 bg-white/40 rounded-full p-1">
                <button
                  onClick={decrease}
                  className="h-10 w-10 rounded-full hover:bg-white transition"
                >
                  -
                </button>

                <span className="w-6 text-center font-bold">
                  {qty}
                </span>

                <button
                  onClick={increase}
                  className="h-10 w-10 rounded-full hover:bg-white transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
  onClick={() => {
    addToCart({ name: "Baby Oil", price, qty });

  }}
  className="w-full h-16 bg-primary text-white font-display text-lg font-bold rounded-full primary-glow hover:scale-[1.02] transition"
>
  Pre-order Now —  ₹{price * qty}
</button>
<p className="text-sm text-gray-500 mt-2">
  Ships within 2–3 business days.
</p>

<p className="text-sm text-gray-500">
  Free returns within 7 days.
</p>

            {/* TABS */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 p-1 glass-panel rounded-full w-fit">
                {["ingredients", "use", "safety"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                      activeTab === tab
                        ? "bg-primary text-white"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {tab === "ingredients"
                      ? "Ingredients"
                      : tab === "use"
                      ? "How to Use"
                      : "Safety Standards"}
                  </button>
                ))}
              </div>

              <div className="glass-panel p-8 rounded-xl min-h-[160px]">
                {activeTab === "ingredients" && (
                  <p>
                    Jojoba oil, sunflower oil, calendula extract.
                  </p>
                )}

                {activeTab === "use" && (
                  <p>
                    Apply gently after bath and massage softly.
                  </p>
                )}

                {activeTab === "safety" && (
                  <p>
                    Dermatologically tested. Paraben-free.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* WATERMARK */}
      <div className="fixed bottom-10 left-10 pointer-events-none">
        <div className="text-[#1b130e]/10 text-6xl font-display font-black">
          CUDLOO
        </div>
      </div>

    </div>
  );
}