import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackButton from "./components/BackButton";
export default function Catalog() {
  const navigate = useNavigate();
  return (
    
    <div className="bg-background-light font-display text-slate-900 min-h-screen pastel-gradient">
      <BackButton />
      {/* ================= HEADER SPACER (NAV OFFSET) ================= */}
      <div className="h-32" />


      {/* ================= HERO ================= */}
      <main className="px-10 max-w-[1440px] mx-auto w-full flex-1">
        <section className="mb-12">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              The Newborn Collection
            </h2>
            <p className="text-slate-500 font-sans max-w-lg">
              Curated essentials crafted with botanical purity and heirloom
              quality for your little one's first moments.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex justify-center border-b border-slate-200/50 mb-8 overflow-x-auto">
            <div className="flex gap-12 px-4">
              {[
                "All Products",
                "Bath & Body",
                "Nursery Essentials",
                "Gifting Collections",
              ].map((tab, i) => (
                <button
                  key={tab}
                  className={`pb-4 text-sm font-bold tracking-[0.15em] uppercase whitespace-nowrap ${
                    i === 0
                      ? "border-b-2 border-primary text-slate-900"
                      : "border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRODUCT GRID ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PRODUCTS.map((p, i) => (
            <motion.div
             onClick={() => navigate(`/product/${p.title}`)}
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-xl p-6 flex flex-col group cursor-pointer"
            >
              {/* TOP */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    p.tag === "PRE-ORDER"
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {p.tag}
                </span>
                <span className="text-slate-400 font-sans text-sm">
                  {p.price}
                </span>
              </div>

              {/* IMAGE */}
              <div className="flex-1 flex flex-col items-center justify-center py-10">
                <div
                  className={`relative w-48 h-48 mb-8 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 ${
                    p.rounded
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-1 text-center">
                  {p.title}
                </h3>
                <p className="text-slate-400 font-sans text-xs tracking-widest uppercase text-center">
                  {p.subtitle}
                </p>
              </div>

              {/* HOVER DETAILS */}
              <div className="hover-reveal mt-4 pt-4 border-t border-white/40">
                <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                  <span className="font-bold text-slate-700 block mb-1">
                    {p.detailTitle}
                  </span>
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200/50 pt-20 pb-10 px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold tracking-[0.2em] uppercase mb-6">
              CUDLOO
            </h4>
            <p className="text-slate-500 font-sans max-w-sm leading-relaxed mb-8">
              Crafting moments of pure serenity through dermatologist-approved,
              botanical-first care for the most sensitive skin.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              "Our Philosophy",
              "Sourcing Stories",
              "Gifting Suite",
              "Store Locator",
            ]}
          />
          <FooterCol
            title="Support"
            items={[
              "Shipping & Returns",
              "Privacy Policy",
              "Terms of Service",
              "Contact Us",
            ]}
          />
        </div>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-10 text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold">
          <p>© 2024 CUDLOO LUXURY BABY CARE</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Facebook</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= DATA ================= */

const PRODUCTS = [
  {
    title: "Calming Baby Lotion",
    subtitle: "150ml / 5.1 fl oz",
    price: "$48.00",
    tag: "PRE-ORDER",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIb8uPWfgX0iT4tBhEtdB8uR6IjxrDb8v_DEpPYa6A36GZJb88ykVKjoemnPYDyhgye4VHFlPROdKKl9yv5kWC5gGHH4tJOcPsxd_IEWXeTErwFgiYfw0ICrOuWlTI2YNZDyKvNfXM1Agx1tsIDGwYeRvScZ2NOrtQisEHJU06LYjII1M4yZMIw6V1xM5Wuakh1HS_iy2Kx0LFb0mGVxbuqHBQO12e-Fb_3k6c_5tWT2JhG9pGR3cKQO-w_-d-nYZHoNKfz4A9sZD",
    rounded: "rounded-full",
    detailTitle: "KEY INGREDIENTS:",
    detail: "Organic Calendula, Shea Butter, French Lavender.",
  },
  {
    title: "Organic Cotton Swaddle",
    subtitle: "Set of Three",
    price: "$125.00",
    tag: "COMING SOON",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvNptpzmm0rB0t6Qj-8Zpbbrqr5pAtc0nkaR12BbdNAwJS4uqaWSpdf6G22we5qkQtgxZolsWIWtlzdOje2Ji4I0vXbhG1q-Jiegt9_wgIxu8G4vsPUmMuV2V_6jDUaQdGo9UPfyQQpcZxZDjxeE9u5mgYDP5Ezyl3fnfksSGRF89YBhbOEeVo2EeXRTLiidGdeogZJEwkhoy67-khk-1TdMOwKYyLzjUlzCVZb8GSgI4hB-kb4HkHPFrRbd_HQkX2yLWT1DBR5KTF",
    rounded: "rounded-xl",
    detailTitle: "CRAFTSMANSHIP:",
    detail: "100% GOTS Certified Cotton, Hand-finished edges.",
  },
  {
    title: "Soothing Diaper Balm",
    subtitle: "50g / 1.7 oz",
    price: "$32.00",
    tag: "PRE-ORDER",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTHTEcikWEJlynvrW8QEXQBA-trohjD3D35ZaY-PPWUAm55XiA4dlUuxut09YR-lSlxutLJF2sYvIH7wMpEM6wJP0OgRxoifRPy56bTRVid96jlcv1K1SNGr-IaIZiFP-iKQeMGdndTwfxWqzzi9TFTSNq-45DtySbqQBFvOstf31Uc0xekRl39zcinxj0tpkwneL8PCRZ8hsSXhTUmaM9REdnWPEKHW4fZF7D9UbG7Y-1I7C81AS491dgHg4urKmEcvNIYpKtvYw",
    rounded: "rounded-full",
    detailTitle: "KEY INGREDIENTS:",
    detail: "Zinc Oxide, Beeswax, Chamomile Extract.",
  },
  {
    title: "Newborn Gift Set",
    subtitle: "The Essential Kit",
    price: "$210.00",
    tag: "COMING SOON",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNDlAa1hKj2EMUPETYbSJ0af0Q4U985qoySWYrOC6nvbJVFlVif69flnPYpw6Ir_vjymTuHzcCGLIHeaLtbA4PT0t4DJmjRxrM3mW0USXN2Ly-Q4Z8swqRKAHojT8yysjodFVZQyMgXpU2pf4kXwW08ODMUSAJn0i6zWlUF-W-9E1EK-smS6mSw7UL6pvzDBgH-rber-CcnhLLYr_5nOLMnJID6oNvJhHHrtenuoBUhcpPFb0jeZIiG2qhz_DiKYHdQW-7_yerwB5a",
    rounded: "rounded-lg",
    detailTitle: "INCLUDES:",
    detail: "Lotion, Wash, Swaddle, and Signature Candle.",
  },
];

/* ================= FOOTER COLUMN ================= */

function FooterCol({ title, items }) {
  return (
    <div className="font-sans">
      <h5 className="font-display font-bold text-slate-800 mb-6 tracking-wide">
        {title}
      </h5>
      <ul className="space-y-4 text-sm text-slate-500">
        {items.map((i) => (
          <li key={i} className="hover:text-primary transition">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
