import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Calming Baby Lotion",
    size: "150ml / 5.1 fl oz",
    price: "$48.00",
    tag: "Pre-order",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIb8uPWfgX0iT4tBhEtdB8uR6IjxrDb8v_DEpPYa6A36GZJb88ykVKjoemnPYDyhgye4VHFlPROdKKl9yv5kWC5gGHH4tJOcPsxd_IEWXeTErwFgiYfw0ICrOuWlTI2YNZDyKvNfXM1Agx1tsIDGwYeRvScZ2NOrtQisEHJU06LYjII1M4yZMIw6V1xM5Wuakh1HS_iy2Kx0LFb0mGVxbuqHBQO12e-Fb_3k6c_5tWT2JhG9pGR3cKQO-w_-d-nYZHoNKfz4A9sZD",
    info: "Organic Calendula, Shea Butter, French Lavender",
  },
  {
    id: 2,
    name: "Organic Cotton Swaddle",
    size: "Set of Three",
    price: "$125.00",
    tag: "Coming Soon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvNptpzmm0rB0t6Qj-8Zpbbrqr5pAtc0nkaR12BbdNAwJS4uqaWSpdf6G22we5qkQtgxZolsWIWtlzdOje2Ji4I0vXbhG1q-Jiegt9_wgIxu8G4vsPUmMuV2V_6jDUaQdGo9UPfyQQpcZxZDjxeE9u5mgYDP5Ezyl3fnfksSGRF89YBhbOEeVo2EeXRTLiidGdeogZJEwkhoy67-khk-1TdMOwKYyLzjUlzCVZb8GSgI4hB-kb4HkHPFrRbd_HQkX2yLWT1DBR5KTF",
    info: "100% GOTS Certified Cotton, Hand-finished edges",
  },
  {
    id: 3,
    name: "Soothing Diaper Balm",
    size: "50g / 1.7 oz",
    price: "$32.00",
    tag: "Pre-order",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTHTEcikWEJlynvrW8QEXQBA-trohjD3D35ZaY-PPWUAm55XiA4dlUuxut09YR-lSlxutLJF2sYvIH7wMpEM6wJP0OgRxoifRPy56bTRVid96jlcv1K1SNGr-IaIZiFP-iKQeMGdndTwfxWqzzi9TFTSNq-45DtySbqQBFvOstf31Uc0xekRl39zcinxj0tpkwneL8PCRZ8hsSXhTUmaM9REdnWPEKHW4fZF7D9UbG7Y-1I7C81AS491dgHg4urKmEcvNIYpKtvYw",
    info: "Zinc Oxide, Beeswax, Chamomile Extract",
  },
  {
    id: 4,
    name: "Newborn Gift Set",
    size: "The Essential Kit",
    price: "$210.00",
    tag: "Coming Soon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNDlAa1hKj2EMUPETYbSJ0af0Q4U985qoySWYrOC6nvbJVFlVif69flnPYpw6Ir_vjymTuHzcCGLIHeaLtbA4PT0t4DJmjRxrM3mW0USXN2Ly-Q4Z8swqRKAHojT8yysjodFVZQyMgXpU2pf4kXwW08ODMUSAJn0i6zWlUF-W-9E1EK-smS6mSw7UL6pvzDBgH-rber-CcnhLLYr_5nOLMnJID6oNvJhHHrtenuoBUhcpPFb0jeZIiG2qhz_DiKYHdQW-7_yerwB5a",
    info: "Lotion, Wash, Swaddle & Signature Candle",
  },
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f0ff] via-[#fff9f0] to-[#f0f7ff] px-10">
      {/* HEADER */}
      <header className="py-10 flex justify-between items-center">
        <h1 className="text-2xl tracking-[0.3em] uppercase font-semibold">
          CUDLOO
        </h1>
        <nav className="flex gap-10 text-xs tracking-widest uppercase text-slate-500">
          <a href="#">Philosophy</a>
          <a href="#">Sourcing</a>
          <a href="#">Journal</a>
        </nav>
      </header>

      {/* TITLE */}
      <section className="text-center mb-16">
        <h2 className="text-5xl font-light mb-4">
          The Newborn Collection
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Curated essentials crafted with botanical purity and heirloom quality
          for your little one’s first moments.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-24">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-6 group cursor-pointer"
          >
            <div className="flex justify-between mb-6">
              <span
                className={`text-[9px] tracking-widest uppercase px-3 py-1 rounded-full ${
                  product.tag === "Pre-order"
                    ? "bg-blue-100 text-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {product.tag}
              </span>
              <span className="text-slate-400 text-sm">
                {product.price}
              </span>
            </div>

            <div className="flex flex-col items-center py-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
              />

              <h3 className="text-lg mt-6 text-slate-800">
                {product.name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-slate-400">
                {product.size}
              </p>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 border-t border-white/40 pt-4">
              <p className="text-[10px] text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700 block mb-1">
                  DETAILS
                </span>
                {product.info}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}


