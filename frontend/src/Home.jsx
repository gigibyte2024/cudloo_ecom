// import logo from "./assets/logo.png";
// import babyImg from "./assets/baby.png";
// import productImg from "./assets/towel.png";


// export default function App() {
//   return (
//     <div className="bg-background-light text-[#1b0d11] font-display antialiased overflow-x-hidden">

//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-50">
//         <div className="glass-panel mx-4 mt-4 rounded-full px-6 py-3 max-w-7xl mx-auto shadow-sm">
//           <div className="flex items-center justify-between">

//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="Cudloo logo"
//                 className="w-8 h-8 object-contain"
//               />
//               <span className="text-xl font-bold tracking-[0.1em]">
//                 CUDLOO
//               </span>
//             </div>

//             {/* Links */}
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#philosophy" className="text-sm text-gray-600 hover:text-primary">
//                 Philosophy
//               </a>
//               <a href="#collection" className="text-sm text-gray-600 hover:text-primary">
//                 Collection
//               </a>
//               <a href="#safety" className="text-sm text-gray-600 hover:text-primary">
//                 Safety
//               </a>
//             </div>

//             {/* CTA */}
//             <button className="hidden sm:block bg-primary text-white text-xs font-bold px-6 py-3 rounded-full">
//               Notify Me
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pastel-pink via-background-light to-pastel-blue opacity-80" />

//         <div className="container max-w-7xl mx-auto relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">

//             {/* Text */}
//             <div className="flex-1 text-center lg:text-left">
//               <div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8">
//                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//                 <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
//                   Launching Soon
//                 </span>
//               </div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
//                 Gentle Care, <br />
//                 <span className="italic text-gray-700">From Day One.</span>
//               </h1>

//               <p className="text-lg text-gray-600 max-w-lg mb-10">
//                 Premium newborn essentials crafted with love, science, and softness.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-[#1b0d11] text-white px-8 py-4 rounded-full hover:bg-primary transition">
//                   Join Waitlist
//                 </button>
//                 <button className="bg-white border px-8 py-4 rounded-full">
//                   View Collection
//                 </button>
//               </div>
//             </div>

//             {/* Hero Image */}
//             <div className="flex-1 max-w-lg relative animate-float">
//               <div
//                 className="w-full aspect-square rounded-3xl shadow-2xl bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8WeYeTi10bqKuSmCbYdyFSNFsAq4ThvR94wGmTx9icvVZQ6Mq5g88s0h63X0_E0h0jk3pkBeb39Gkh3GqdP8QjJL7BzR_Z1l8f95LiKpwfx2TciGOcOroQihijOvkkP-ibQe9dE9_rKDZuUGMWwY_Lnkw4T1_bSJW1ntuV6KJu0t7pmyCHurc1MCbUtLkxPKi9sBl-lyZvRe2_BZ7PIyHAPOA64QsDvV9ObWv3qUJouP7lGNpsLBB7kH4_TeDFzU7KG9xCQtKZd_8')",
//                 }}
//               />
//             </div>

//           </div>
//         </div>
//       </section>

import logo from "./assets/logo.png";
import { Link } from "react-router-dom";


import babyImg from "./assets/baby.png";
import productImg from "./assets/towel.png";
import creamImg from "./assets/cream.png";
import lotionImg from "./assets/lotion.png";
import oilImg from "./assets/oil.png";
import shampooImg from "./assets/shampoo.png";
import heroImg from "./assets/hero-mother-baby.png";



export default function App() {
  return (
    <div className="bg-background-light text-[#1b0d11] font-display antialiased overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-panel mx-4 mt-4 rounded-full px-6 py-3 max-w-7xl mx-auto shadow-sm">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cudloo logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-[0.1em]">CUDLOO</span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#philosophy" className="text-sm text-gray-600 hover:text-primary">Philosophy</a>
              <Link to="/catalog" className="text-sm text-gray-600 hover:text-primary">
  Collection
</Link>

              <a href="#safety" className="text-sm text-gray-600 hover:text-primary">Safety</a>
            </div>

            {/* CTA */}
            <Link
  to="/catalog"
  className="hidden sm:block bg-primary text-white text-xs font-bold px-6 py-3 rounded-full"
>
  Shop Now
</Link>


          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pastel-pink via-background-light to-pastel-blue opacity-80" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Now Available
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Gentle Care, <br />
                <span className="italic text-gray-700">From Day One.</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg mb-10">
                Premium newborn essentials crafted with love, science, and softness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/catalog" className="bg-[#1b0d11] text-white px-8 py-4 rounded-full hover:bg-primary transition">
    Shop Collection
  </Link>
  <Link to="/catalog" className="bg-white border px-8 py-4 rounded-full">
    Explore Essentials
  </Link>
</div>

            </div>

            {/* Hero Image + Floating Badges */}
            <div className="flex-1 max-w-lg relative">

              {/* IMAGE WITH TILT + FLOAT */}
              <div
  className="
    w-full aspect-square rounded-3xl
    bg-cover bg-center
    shadow-[0_30px_80px_rgba(0,0,0,0.12)]
    transform rotate-[-3deg]
    animate-float-tilt
    transition-all duration-700 ease-out
    hover:rotate-0 hover:-translate-y-3
  "
  style={{
    backgroundImage: `url(${heroImg})`,
  }}
/>


              {/* pH Balanced */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  💧
                </div>
                <span className="text-sm font-medium text-gray-700">pH Balanced</span>
              </div>

              {/* 100% Safe */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-5 py-4 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    ✔
                  </div>
                  <span className="font-semibold text-sm text-gray-800">
                    100% Safe
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Dermatologically tested for newborn skin.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
{/* Philosophy */}
<section
  id="philosophy"
  className="py-28 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT – Image Cards */}
    <div className="relative grid grid-cols-2 gap-6">

      {/* Product Card */}
      <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
        <img
          src={productImg}
          alt="Cudloo baby care product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Card – Backed by Science */}
      <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-center">
        <div className="text-blue-500 text-xl mb-2">🧪</div>
        <h4 className="font-semibold mb-1">Backed by Science</h4>
        <p className="text-sm text-gray-500">
          Formulated by pediatric dermatologists.
        </p>
      </div>

      {/* Text Card – Made with Love */}
      <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-center">
        <div className="text-pink-500 text-xl mb-2">❤️</div>
        <h4 className="font-semibold mb-1">Made with Love</h4>
        <p className="text-sm text-gray-500">
          Every ingredient is chosen with a mother’s care.
        </p>
      </div>

      {/* Baby Illustration */}
      <div className="rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-6">
        <img
          src={babyImg}
          alt="Sleeping newborn baby"
          className="w-full h-full object-contain"
        />
      </div>

    </div>

    {/* RIGHT – Text Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
        Made for the <br />
        <span className="font-medium">Most Precious Skin</span>
      </h2>

      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        A newborn’s skin is 30% thinner than an adult’s, making it more delicate
        and prone to irritation. CUDLOO was born from a simple promise: to create
        the world’s safest, most gentle skincare for your little one.
      </p>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        We stripped away the harsh chemicals, artificial fragrances, and fillers.
        What remains is pure, organic nourishment that mimics the natural
        protection of the womb.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-4">
        {["Hypoallergenic", "Vegan", "Cruelty Free"].map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700"
          >
            <span className="text-green-500">✔</span>
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


{/* Collection */}
<section id="collection" className="py-24 bg-pastel-blue/30">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-3xl font-light">
      Featured Essentials
      </h2>
      <p className="text-gray-500 mt-2">
        Gentle essentials for your daily routine.
      </p>
    </div>

    {/* Cards */}
    <div
      className="
        flex gap-6 overflow-x-auto pb-4 hide-scrollbar
        md:grid md:grid-cols-4 md:gap-8 md:overflow-visible
        snap-x snap-mandatory
      "
    >

      {[
        {
          title: "Nourishing Baby Oil",
          subtitle: "With Organic Jojoba & Almond",
          img: oilImg,
        },
        {
          title: "Gentle Shampoo",
          subtitle: "Tear-free Formula",
          img: shampooImg,
        },
        {
          title: "Daily Moisture Lotion",
          subtitle: "24hr Hydration",
          img: lotionImg,
        },
        {
          title: "Soothing Diaper Cream",
          subtitle: "Zinc Oxide & Chamomile",
          img: creamImg,
        },
      ].map((item, index) => (
        <div
          key={item.title}
          style={{ animationDelay: `${index * 120}ms` }}
          className="
            min-w-[260px] md:min-w-0
            snap-center
            animate-fadeUp
          "
        >

          {/* Image Card */}
          <div
            className="
              relative bg-white rounded-3xl overflow-hidden
              shadow hover:shadow-xl transition
            "
          >

            {/* Coming Soon Badge */}
            <span
              className="
                absolute top-4 right-4
                bg-white text-primary text-xs font-semibold
                px-3 py-1 rounded-full shadow
              "
            >
           BESTSELLER
            </span>

            {/* Product Image */}
{/* Product Image */}
<div className="w-full aspect-[4/5]">
  <img
    src={item.img}
    alt={item.title}
    className="
      w-full h-full object-cover
      transition-transform duration-500
      hover:scale-105
    "
  />
</div>

          </div>

          {/* Text Below Image */}
          <div className="mt-4 text-center">
            <h3 className="font-medium text-base">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.subtitle}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

{/* ================= SAFETY SECTION (NORMAL BACKGROUND) ================= */}
<section className="py-28 bg-background-light">

  {/* Safety Icons */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

    {[
      {
        title: "Dermatologist Tested",
        desc: "Clinically proven safe for sensitive newborn skin.",
        icon: "🧴",
        color: "bg-blue-100 text-blue-600",
      },
      {
        title: "100% Organic",
        desc: "Ingredients sourced from certified organic farms.",
        icon: "🌱",
        color: "bg-green-100 text-green-600",
      },
      {
        title: "No Harsh Chemicals",
        desc: "Free from parabens, sulfates, and phthalates.",
        icon: "🚫",
        color: "bg-pink-100 text-pink-600",
      },
      {
        title: "Cruelty Free",
        desc: "Never tested on animals, verified vegan.",
        icon: "🐾",
        color: "bg-purple-100 text-purple-600",
      },
    ].map((item) => (
      <div key={item.title} className="max-w-xs mx-auto">
        <div
          className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl mb-4 ${item.color}`}
        >
          {item.icon}
        </div>
        <h4 className="font-semibold mb-2">{item.title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</section>

{/* ================= CTA SECTION (LIGHT TRANSLUCENT PINK) ================= */}
<section
  className="py-28"
  style={{
    background:
      "linear-gradient(180deg, rgba(255, 230, 236, 0.55), rgba(255, 230, 236, 0.35))",
  }}
>
  <div className="text-center max-w-2xl mx-auto px-6">

    {/* Bell Icon */}
    <div className="w-12 h-12 mx-auto rounded-full bg-white/70 backdrop-blur flex items-center justify-center text-pink-500 mb-6 shadow-sm">
      🔔
    </div>

    <h2 className="text-4xl md:text-5xl font-light mb-4 text-[#1b0d11]">
      Be the First to Experience <br />
      <span className="italic font-normal">Gentle Luxury</span>
    </h2>

    <p className="text-gray-600 mb-10 leading-relaxed">
    Join our list to receive product updates, care guides,
and exclusive offers.

    </p>

    {/* Email Input */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email address"
        className="
          w-full sm:w-80 px-6 py-4 rounded-full
          bg-white/80 backdrop-blur
          border border-white/60 outline-none
          focus:ring-2 focus:ring-primary
        "
      />
      <button className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
        Notify Me
      </button>
    </div>

    <p className="text-xs text-gray-500 mt-4">
      We respect your privacy. Unsubscribe at any time.
    </p>

  </div>





</section>

{/* Footer */}
<footer className="bg-white py-8 border-t">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

  <div className="flex items-center gap-2 font-semibold text-gray-800">
  <img
    src={logo}
    alt="Cudloo logo"
    className="w-5 h-5 object-contain"
  />
  <span>CUDLOO</span>
</div>


    <div className="flex gap-6">
      <a href="#" className="hover:text-primary">Instagram</a>
      <a href="#" className="hover:text-primary">TikTok</a>
      <a href="#" className="hover:text-primary">Contact</a>
    </div>

    <span className="text-xs">
      © 2025 Cudloo. All rights reserved.
    </span>

  </div>
</footer>


    </div>
  );
}
