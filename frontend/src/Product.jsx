import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  const product = products[id] || products["oil"];

  return (
    <div className="min-h-screen pt-24 bg-[#f8f7f6]">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
          <img
            src={product.img}
            className="max-w-md w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 p-12 space-y-8">

          <h1 className="text-5xl font-black leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-600">
            Dermatologically tested for newborn skin.
          </p>

          {/* quantity */}
          <div className="flex justify-between bg-white p-4 rounded-full">
            <span>Quantity</span>
            <div className="flex gap-4">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          {/* button */}
          <button className="w-full bg-orange-500 text-white py-5 rounded-full text-lg font-bold">
            Pre-order — {product.price}
          </button>

          <div className="bg-white p-6 rounded-xl">
            Organic jojoba oil + calendula. No parabens.
          </div>

        </div>
      </div>
    </div>
  );
}

const products = {
  oil: {
    title: "Gentle Nourishing Baby Oil",
    price: "$48.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_PcG-NwmjMV40et0HYQ7mDhNN52ck8-ZTYssv_jF4MQTR7fjd7P952xH2IYKC93pl2SQ_GDd_bcG6XqoWo89j8qj4ZncXm14TCkMy4XSvkFV0l67vnsdx70RcEC-3BqIvoTQAjn-BKFRdYBcbeb_1brbAVeQpzapsClnHjmclW-aYq0NOcIyC93paamzLFbVvSUPTbkETeIE16SNpEENfZ-2jK8VCOkID0UR11dpvM1RswR6kFDzuUiDpTwAbjXn7E1xNqWxwH_DY"
  }
};
