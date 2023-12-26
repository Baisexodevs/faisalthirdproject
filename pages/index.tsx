import React, { useState, useEffect } from "react";
// import { GetStaticProps } from "next";
import Image from "next/image";
// import { useTranslations } from "next-intl";
// import axios from "axios";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import Slideshow from "../components/HeroSection/Slideshow";
import OverlayContainer from "../components/OverlayContainer/OverlayContainer";
import Card from "../components/Card/Card";
import TestiSlider from "../components/TestiSlider/TestiSlider";
import { apiProductsType, itemType } from "../context/cart/cart-types";
import LinkButton from "../components/Buttons/LinkButton";

// /bg-img/ourshop.png
import ourShop from "../public/bg-img/ourshop.jpg";

type Props = {
  products: itemType[];
};

// const Home: React.FC<Props> = ({ products }) => {
const Home: React.FC<Props> = () => {
  // const t = useTranslations("Index");
  const [currentItems, setCurrentItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `${process.env.NEXT_PUBLIC_PROD_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&offset=${currentItems.length}&limit=10`
  //     );
  //     const fetchedProducts = res.data.data.map((product: apiProductsType) => ({
  //       ...product,
  //       img1: product.image1,
  //       img2: product.image2,
  //     }));
  //     setCurrentItems((products) => [...products, ...fetchedProducts]);
  //     setIsFetching(false);
  //   };
  //   fetchData();
  // }, [isFetching, currentItems.length]);

  // const handleSeemore = async (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   setIsFetching(true);
  // };

  const plantsDataArr = [
    {
      id: 1,
      name: "Artificial Plant",
      price: 300,
      img1: "/plants/plant1.jpg",
      img2: "/plants/plant1.jpg",
    },
    {
      id: 2,
      name: "Artificial Plant",
      price: 300,
      img1: "/plants/plant2.jpg",
      img2: "/plants/plant2.jpg",
    },
    {
      id: 3,
      name: "Artificial Plant",
      price: 300,
      img1: "/plants/plant3.jpg",
      img2: "/plants/plant3.jpg",
    },
    {
      id: 4,
      name: "Artificial Plant",
      price: 300,
      img1: "/plants/plant4.jpg",
      img2: "/plants/plant4.jpg",
    },
    {
      id: 5,
      name: "Artificial Plant",
      price: 300,
      img1: "/plants/plant5.jpg",
      img2: "/plants/plant5.jpg",
    },
  ];

  return (
    <>
      {/* ===== Header Section ===== */}
      <Header />

      {/* ===== Carousel Section ===== */}
      <Slideshow />

      <main id="main-content" className="-mt-20">
        {/* ===== Category Section ===== */}
        <section className="w-full h-auto py-10 border border-b-2 border-gray100">
          <div className="app-max-width app-x-padding h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full sm:col-span-2 lg:col-span-2">
              <OverlayContainer
                imgSrc="/bg-img/outdoor-minipage.jpg"
                imgSrc2="/bg-img/indoor-minipage.jpg"
                imgAlt="New Arrivals"
              >
                <LinkButton
                  href="/product-category/new-arrivals"
                  extraClass="absolute bottom-10-per sm:right-10-per z-20"
                >
                  {/* {t("new_arrivals")} */}
                  Outdoor Plants
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
              <OverlayContainer
                imgSrc="/bg-img/indoor-minipage.jpg"
                imgAlt="Women Collection"
              >
                <LinkButton
                  href="/product-category/women"
                  extraClass="absolute bottom-10-per z-20"
                >
                  {/* {t("women_collection")} */}
                  Indoor Plants
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
              <OverlayContainer
                imgSrc="/bg-img/artificial-minipage.jpg"
                imgAlt="Men Collection"
              >
                <LinkButton
                  href="/product-category/men"
                  extraClass="absolute bottom-10-per z-20"
                >
                  {/* {t("men_collection")} */}
                  Artificial Plants
                </LinkButton>
              </OverlayContainer>
            </div>
          </div>
        </section>

        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              {/* <h2 className="text-3xl mb-4">{t("best_selling")}</h2> */}
              <h2 className="text-3xl mb-4">Best Selling</h2>
              {/* <span>{t("best_selling_desc")}</span> */}
              <span>Best Selling</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
            <Card key={plantsDataArr[0].id} item={plantsDataArr[0]} />
            <Card key={plantsDataArr[1].id} item={plantsDataArr[1]} />
            <Card key={plantsDataArr[2].id} item={plantsDataArr[2]} />
            <Card key={plantsDataArr[3].id} item={plantsDataArr[3]} />
          </div>
        </section>

        {/* ===== Testimonial Section ===== */}
        <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">
          {/* <h2 className="text-3xl">{t("testimonial")}</h2> */}
          <h2 className="text-3xl">Testimonial</h2>
          <TestiSlider />
        </section>

        {/* ===== Featured Products Section ===== */}
        <section className="app-max-width app-x-padding my-16 flex flex-col">
          <div className="text-center mb-6">
            {/* <h2 className="text-3xl">{t("featured_products")}</h2> */}
            <h2 className="text-3xl">Featured Products</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {plantsDataArr.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              // value={!isFetching ? t("see_more") : t("loading")}
              value={!isFetching ? 'see more' : 'loading'}
              // onClick={handleSeemore}
            />
          </div>
        </section>

        <div className="border-gray100 border-b-2"></div>

        {/* ===== Our Shop Section */}
        <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center text-center">
          <div className="textBox w-3/4 md:w-2/4 lg:w-2/5 mb-6">
            {/* <h2 className="text-3xl mb-6">{t("our_shop")}</h2> */}
            <h2 className="text-3xl mb-6">Our Shop</h2>
            {/* <span className="w-full">{t("our_shop_desc")}</span> */}
            <span className="w-full">We the most varieties of plants from all over the world!</span>
          </div>
          <div className="w-full app-x-padding flex justify-center">
            <Image src={ourShop} alt="Our Shop" />
          </div>
        </section>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   let products: itemType[] = [];
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&limit=10`
//   );
//   const fetchedProducts = res.data;
//   fetchedProducts.data.forEach((product: apiProductsType) => {
//     products = [
//       ...products,
//       {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         img1: product.image1,
//         img2: product.image2,
//       },
//     ];
//   });
//   return {
//     props: {
//       messages: {
//         // ...require(`../messages/index/${locale}.json`),
//         ...require(`../messages/common/${locale}.json`),
//       },
//       products,
//     }, // will be passed to the page component as props
//   };
// };

export default Home;
