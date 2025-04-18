import { NavLink } from "react-router-dom";
import logo from "/Footer/logo-yellow.svg";
import truckIcon from "/Footer/truck.svg";
import cashIcon from "/Footer/cash.svg";
import googleplay from "/Footer/google-play.webp";
import applestore from "/Footer/apple-store.webp";
import facebookIcon from "/Footer/facebook.svg";
import instagramIcon from "/Footer/instagram.svg";
import twitterIcon from "/Footer/twitter.svg";
import pinterestIcon from "/Footer/pinterest.svg";
import snapchatIcon from "/Footer/snapchat.svg";
import appleIcon from "/Footer/apple.svg";

import gpayIcon from "/Footer/gpay.svg";
import paytmIcon from "/Footer/paytm.svg";
import phonepayIcon from "/Footer/phonepay.svg";
import visaIcon from "/Footer/visa.svg";
import rupayIcon from "/Footer/rupay.svg";
import mastercardIcon from "/Footer/mastercard.svg";
export default function Footer() {
  const section2 = [
    [
      {
        title: "Men's Clothing",
        items: [
          "Top Wear",
          "Men's New Arrivals",
          "Men's T-Shirts",
          "Men's Hoodies & Sweatshirts",
          "Oversized T-Shirts for Men",
          "Men's Long Sleeve T-shirts",
          "Men's White T-shirts",
          "Men's Crew Neck T-shirts",
          "Men's Half Sleeve T-Shirts",
          "Men's Printed T-shirts",
          "Men's Plain T-shirts",
          "Men's Plus Size T-shirts",
          "Men's Vests",
          "Men's Polo T-Shirts",
          "Men's tank Tops",
          "Men's Sweaters",
          "Men's Jackets",
          "Men's Combo T-Shirts",
          "Men's Shirts",
          "Men's Nightwear",
          "Men's Innerwear",
          "Men's Plus Size Store",
          "Bottom Wear",
          "Men's Pajamas",
          "Men's Boxer Shorts",
          "Men's Shorts",
          "Men's Jogger",
          "Men's Cargo Joggers",
          "Men's Track Pants",
          "Men's Jeans",
          "Men's Sweatpants",
          "Men's Trousers & Pants",
        ],
      },
      {
        title: "Featured",
        items: [
          "Men's Flip Flops",
          "Men's Sliders",
          "Marvel T-Shirts",
          "Disney T-Shirts",
          "Avengers T-Shirts",
          "Star Wars T-Shirts",
          "Batman T-Shirts",
          "Superman T-Shirts",
          "Joker T-Shirts",
        ],
      },
    ],
    [
      {
        title: "Women's Clothing",
        items: [
          "Women's Top Wear",
          "Women's New Arrivals",
          "Women's T-Shirts",
          "Women's Fashion Tops",
          "Women's Tank Tops",
          "Women's Hoodies & Sweatshirts",
          "Women's Dresses",
          "Women's 3/4 Sleeve T-Shirts",
          "Women's Kurtis",
          "Women's Combo T-Shirts",
          "Women's Nightwear",
          "Women's Plus Size Store",
          "Women's Bottom Wear",
          "Women's Co-ord Sets",
          "Women's Pajamas",
          "Women's Boxer Shorts",
          "Women's Jeans",
          "Women's Wide Leg Jeans",
          "Women's Jeggings",
          "Women's Joggers",
          "Women's Trousers & Pants",
          "Women's Cargo Pants",
          "Women's Track Pants",
          "Women's Shorts",
          "BAGS",
          "Laptop Bags",
          "Small Backpacks",
        ],
      },
      { title: "Featured", items: ["Women's Slides", "Women's Flip Flops"] },
    ],
    [
      {
        title: "Mobile Covers",
        items: [
          "Apple",
          "iPhone 14 Cases & Covers",
          "iPhone 13 Back Covers",
          "iphone 12 back covers cases",
          "iPhone 13 Pro Back Covers",
          "Realme",
          "Samsung",
          "Xiaomi",
          "Oneplus",
          "Vivo",
          "Oppo",
          "Poco",
        ],
      },
    ],
  ];
  return (
    <footer className="bg-[#1c1c1c] p-5">
      <section className="p-4">
        <img src={logo} alt="" className="my-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 text-white">
            <h4 className="text-xl font-medium text-primary">
              CUSTOMER SERVICE
            </h4>
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink>Contact Us</NavLink>
              </li>
              <li>
                <NavLink>Track Order</NavLink>
              </li>
              <li>
                <NavLink>Return Order</NavLink>
              </li>
              <li>
                <NavLink>Cancel Order</NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <img src={truckIcon} alt="" />
              <p>15 Days Return Policy*</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={cashIcon} alt="" />
              <p>Cash On Delivery*</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h4 className="text-xl font-medium text-primary">COMPANY</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <li>
                <NavLink>Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink>We are Hiring</NavLink>
              </li>
            </ul>

            <h4 className="text-xl font-medium text-primary">
              DOWNLOAD THE APP
            </h4>
            <div className="flex items-center gap-2">
              <img src={googleplay} alt="" />
              <img src={applestore} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h4 className="text-xl font-medium text-primary">
              CONNECT WITH US
            </h4>
            <div className="flex items-center gap-2">
              <img src={facebookIcon} alt="" />
              <p>4.7M People like this</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={instagramIcon} alt="" />
              <p>1M People like this</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={twitterIcon} alt="" />
              <img src={pinterestIcon} alt="" />
              <img src={snapchatIcon} alt="" />
              <img src={appleIcon} alt="" />
            </div>
            <h4 className="text-xl font-medium text-primary">SECURE PAYMENT</h4>
            <div className="flex items-center gap-2">
              <img src={gpayIcon} alt="" className="w-8 h-7" />
              <img src={paytmIcon} alt="" className="w-8 h-7" />
              <img src={phonepayIcon} alt="" className="w-8 h-7" />
              <img src={visaIcon} alt="" className="w-8 h-7" />
              <img src={rupayIcon} alt="" className="w-8 h-7 scale-y-120" />
              <img
                src={mastercardIcon}
                alt=""
                className="w-8 h-7 -scale-y-80"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium text-primary">
              KEEP UP TO DATE
            </h4>
            <form className="flex border-b-2 border-primary">
              <input
                type="email"
                required
                placeholder="Enter Email Id:"
                className="bg-black text-slate-200 text-lg p-2 w-2/4 outline-none"
              />
              <button
                type="submit"
                className="bg-primary p-2 w-2/4 flex justify-center items-center"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="text-white lg:border-t-2 lg:border-[#979797] flex flex-col gap-5 lg:gap-0 lg:flex-row lg:pt-5">
        {section2.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-3 lg:gap-4  w-full lg:w-full"
          >
            {column.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="my-5 text-xl">{category.title}</h4>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:flex-col lg:gap-2 text-xs">
                  {category.items.map((item, index) => (
                    <li
                      className={`${
                        (item.includes("Bottom Wear") || item === "BAGS") &&
                        "lg:pt-3"
                      }`}
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <div className="flex lg:flex-col gap-5">
          <p className="text-blue-300 uppercase">Fanbook</p>
          <p className="text-blue-300 uppercase">Offers</p>
          <p className="text-blue-300 uppercase">Sitemap</p>
        </div>
      </section>

      <section className="text-white text-xl"> 
        {" "}
        <br />
        <br />
        <h1>
          BEWAKOOF<span>®</span> THE NEW AGE ONLINE SHOPPING EXPERIENCE.
        </h1>{" "}
        <p>
          Founded in 2012, Bewakoof<span>®</span> is a lifestyle fashion brand
          that makes creative, distinctive fashion for the trendy, contemporary
          Indian. Bewakoof<span>®</span> was created on the principle of
          creating impact through innovation, honesty and thoughtfulness.
        </p>
        <br />{" "}
        <p>
          With a team of 400 members, and 2mn products sold till date. We like
          to experiment freely, which allows us to balance creativity and
          relatability, and our innovative designs. Our range of products is
          always fresh and up-to-date, and we clock sales of over 1 lakh
          products a month. Our innovation focus extends to our operations as
          well. We are vertically integrated, manufacture our own products, and
          cut out the middleman wherever possible. This direct-to-consumer model
          allows us to create high-quality fashion at affordable prices. A
          thoughtful brand, we actively attempt to minimize our environmental
          footprint and maximize our social impact. These efforts are integrated
          right into our day-to-day operations, from rainwater harvesting to
          paper packaging to employee benefits. To create an accessible,
          affordable and thoughtful experience of online shopping in India.
        </p>
        <br />{" "}
        <h2>
          Online Shopping at Bewakoof<span>®</span> is hassle-free, convenient
          and super-exciting!{" "}
        </h2>{" "}
        <p>
          Online Shopping has always been a fun and exciting task for most and
          more so when the shopping mall is none other than your own house. We
          have all had days when we have planned trips to the clothing store in
          advance, dreaming about what we would buy once we get there. Now we
          wouldnt think twice before indulging in some online shopping. Well,
          cut to todays time and age, you can do all this from the comfort of
          your home while enjoying many online shopping offers, right from
          amazing deals and discounts to one of the most robust user interface
          amongst most online shopping sites in India, with many shopping
          filters to make your shopping experience truly hassle free. This in
          our own words is what we call Bewakoof.com.{" "}
        </p>
        <br />{" "}
        <p>
          Bewakoof<span>®</span>, THE place to be when it comes to the coolest
          in online fashion, offers you fine, high-quality merchandise go ahead
          and indulge in a bit of online shopping for men and womens fashion. So
          browse through the exciting categories we have on offer from mens
          fashion to basic mens clothing as well as wide variety in womenswear
          and womens clothes to the amazing range of accessories, fill up your
          carts and get fast home delivery for all orders. All of this topped
          with our exclusive online shopping offers makes for an exciting,
          irresistible and uber cool combo! You can even gift some to your near
          and dear ones while being absolutely certain that it will put a smile
          on their faces.
        </p>
        <br />{" "}
        <h2>Bewakoof.com: the quirkiest online shopping sites of all!</h2>{" "}
        <p>
          Online fashion is definitely more accessible with Bewakoof.com.
          Explore the latest collections in Marvel t-shirts including avengers
          t-shirts and captain America t-shirts in{" "}
          <a
            href="https://www.bewakoof.com/official-collaborations-collection"
            title="Official Merchandise Store Online India at Bewakoof.com"
            className="text-blue-300"
          >
            {" "}
            official merchandise.
          </a>{" "}
          Apart from these, quirkiest of T-shirts that you wont find on any
          online shopping sites in India are showcased at Bewakoof.com. If your
          wardrobe has been longing for a cool overhaul then bewakoof.com will
          certainly be your best bet amongst all online shopping sites. Also,
          take a tour of our bewakoof<span>®</span> blog to stay abreast with
          the latest runway trends and be a trendsetter among your immediate
          circles. What we wear speaks volumes of us they say. But what if what
          you wore actually spoke what your mood was! Havent we all wondered
          where we could get those quirky t-shirts and sport them with
          confidence? Sure otherwise getting them made or even buying them from
          otherwise expensive online shopping sites for clothes may cost you
          substantially but with Bewakoof.com, you will understand that you do
          not have to spend a fortune on online fashion to look great. Sliders,
          joggers, sweatshirts, bag and bag packs and so much more are just some
          of the other items you can grab hold of here.
        </p>
        <br />{" "}
        <h2>
          Avail of Online shopping benefits at Bewakoof.com and youll shop
          nowhere else!
        </h2>{" "}
        <p>
          Choose your product, get it ordered online, and we ensure that its
          delivery happens right at your doorstep anywhere in India. You just
          need to take care of the payment for the product from the comfort of
          your home, while we ensure free shipping all the time on almost
          everything with no strings attached. For any second thoughts after
          purchase, we have in place a return policy as well. One of the best
          you will find on any online shopping sites in India. For your online
          shopping experience to be safe and risk-free, we offer Cash On
          Delivery (COD) facility too. So you dont have to worry anymore about
          your hard earned money being stuck when you buy clothes online at
          bewakoof.com. Avail exciting online shopping offers like{" "}
          <a
            href="https://www.bewakoof.com/design-of-the-day"
            title="Buy Latest T Shirt Designs at Lowest Price at Bewakoof.com"
            className="text-blue-300"
          >
            {" "}
            designs of the day{" "}
          </a>{" "}
          and colour of the month when you shop with us. Make sure to use our
          easy 15-day returns policy, card or cash on delivery option and other
          customer-friendly features. A comprehensive sizing guide and detailed
          product descriptions coupled with high-resolution product shots will
          give you all the information to make the right buying decision. Give
          your wardrobe the much-needed upgrade with uber cool clothing head to
          Bewakoof.com for a great online shopping india experience now! Could
          you have asked for more?
        </p>
        <br />{" "}
        <h2>
          Dont miss out on accessories available on our multi-faceted online
          store!{" "}
        </h2>{" "}
        <p>
          We dont just offer you exciting options in online fashion but also
          give you amazing accessories with really cool bags and bag packs to
          choose from. Our bags and backpacks are compact, hassle-free and easy
          to stuff things in. And all of this with the swag that you get to
          carry along with it. Cool designs are what form a major part of our
          online fashion and we also ensure our accessories section doesnt feel
          left out!
        </p>
        <br />{" "}
        <p>
          As for our accessories collection, they are also manufactured with
          impeccable quality materials. Our{" "}
          <a
            href="https://www.bewakoof.com/mobile-covers-india"
            title="Buy Mobile Back Covers &amp; Cases Online India - Bewakoof.com"
            className="text-blue-300"
          >
            mobile covers
          </a>{" "}
          are made from hard and durable polycarbonate, with a matte finish that
          will make for a great protection for your phone with the rough use
          that we put them through nowadays.{" "}
        </p>
        <br /> <h2>Design of The Day- the coolest feature ever!</h2>{" "}
        <p>
          Who said good and cool t-shirts have to expensive? We bring newer,
          cooler and more youth oriented designs everyday. Yes! Everyday you get
          a new design to explore and buy. Although all our t-shirts are at an
          extremely affordable price, we decided to slash them down even
          further. But there is a catch. It is only for those designs and these
          exclusive prices are only valid for for a duration of 24 hours!
          Designs refresh every day at 3pm and are valid only for 24 hours. So
          you need to hurry and grab one fast before it ends. Because we believe
          everyone needs to have a fair chance at all of our fresh designs of
          the day.
        </p>
        <br />
        <h2>
          Bewakoof.com: the Uber Cool Online Fashion Store for the Youth
        </h2>{" "}
        <p>
          We, at Bewakoof.com, have all that you need to glam up your cool
          quotient. From an extensive range of plus size clothing,{" "}
          <a
            href="https://www.bewakoof.com/men-shirts"
            title="Buy Mens Shirts Online at Bewakoof.com"
            className="text-blue-300"
          >
            casual shirts for men
          </a>{" "}
          and accessories for everyone, we purvey diversity of choices in online
          shopping india platform has to offer under one umbrella. The range of
          apparels like{" "}
          <a
            href="https://www.bewakoof.com/men-t-shirts"
            title="Buy T Shirt for Men Online at Bewakoof.com"
            className="text-blue-300"
          >
            men t-shirts
          </a>
          , joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and
          more provide an array of options for the online customer to create a
          ravishing ensemble from. We try to target all kinds of customers and
          cater to their needs and preferences. Communication is the key to our
          functioning. Your Bewakoof<span>®</span> Online fashion Shop has
          arrived! Do not miss the attractive online shopping offers everyday.
          Work your fashion with the wide range of apparels available only one
          click away! Make a statement with our best t-shirts online! Get more,
          pay less!
        </p>
        <br /> <h2>OUR PHILOSOPHY</h2>{" "}
        <p>
          We believe in creating the kind of fashion, that makes you stand out
          as they are in line with the latest local and global trends of the
          industry, but also at the same time offer value for money
          functionality, with quality materials and comfortable and flattering
          prints. We try to look into the psyche of our customers, and try to
          get inspired by the conversations and experiences around us while
          creating our graphics, to ensure that they are relatable. We believe
          in constant and consistent innovation to ensure that our fans get
          nothing short of the bets at affordable rates! While most people do
          not know, we do not outsource the manufacturing of our products,
          everything from the conception of the designs to the manufacture and
          the styling that you see on the photographs of the banners and product
          pages of our website all happen in house! We go from yarn to product
          and since we 're vertically integrated and bring fashion from us
          directly to your doorstep without any middlemen that also further
          ensures reliability because for us it is not just about the money but
          about building the trust and credibility in our fans about our brand.
          We also make sure to decrease the impact on environment and are
          building initiatives that will help us with the same, for now by
          optimizing our processes to use only as much as we need from nature,
          rain water harvesting and recycling the water from our RO water
          facility, because we believe that the spirit of Bewakoof<span>®</span>{" "}
          is about creating an impact by breaking conventions and having a
          different perspective!
        </p>
      </section>
    </footer>
  );
}
