import React, { useState } from 'react';

// Figma asset imports
import imgLogo from "figma:asset/2b2f193bd15f00ad935683e809966b5db6db325c.png";
import imgInstagram from "figma:asset/4c929510c5e1df5fbede3c8e0bc905a465846958.png";
import imgHero from "figma:asset/cf46f2afb779036d9792b9d1a923700700652447.png";
import imgOrganicBg from "figma:asset/12a66fb6ce5811adfc2a6ab4254dcd1097af7faf.png";
import imgProduct from "figma:asset/8c835b50354b234bf40886fa62637c86f6ab35c0.png";
import imgOrganicIcon from "figma:asset/46d29d0ab0ff99f89f81a28abdfbc2e142d4d75c.png";
import imgUnprocessed from "figma:asset/30c0767b04b005ae6dac0b7a8263f3c5ea36dce1.png";
import imgRaw from "figma:asset/1783101af1fd9cfcfdca8bbd97052634c2ae3055.png";
import imgGlass from "figma:asset/8cd93750742dc78369f38ba5759884360c40a6ae.png";
import imgMadeToOrder from "figma:asset/a2fc1bd9acc754b27345d21dec3dc3a2dd4588db.png";

// SVG paths
const HEART_PATH = "M2.64474 1.11095C1.64163 1.55642 0.906977 2.61661 0.906977 3.88073C0.906977 5.17189 1.45116 6.16743 2.22995 7.02076C2.8727 7.72363 3.65028 8.30662 4.40851 8.87433C4.5891 9.0095 4.76747 9.14427 4.94363 9.27866C5.26167 9.52255 5.54526 9.73588 5.81916 9.89162C6.09307 10.0474 6.31256 10.1179 6.5 10.1179C6.68744 10.1179 6.90754 10.0474 7.18084 9.89162C7.45474 9.73588 7.73833 9.52255 8.05637 9.27866C8.23253 9.14388 8.4109 9.0093 8.59149 8.87492C9.34972 8.30603 10.1273 7.72363 10.77 7.02076C11.5494 6.16743 12.093 5.17189 12.093 3.88073C12.093 2.6172 11.3584 1.55642 10.3553 1.11095C9.38056 0.677827 8.07088 0.792427 6.82651 2.04949C6.78421 2.09215 6.73349 2.12608 6.67739 2.14926C6.62129 2.17244 6.56096 2.18438 6.5 2.18438C6.43904 2.18438 6.37871 2.17244 6.32261 2.14926C6.26651 2.12608 6.21579 2.09215 6.17349 2.04949C4.92912 0.792427 3.61944 0.677827 2.64474 1.11095ZM6.5 1.13211C5.10205 -0.0844053 3.5366 -0.254835 2.26744 0.308759C0.928744 0.905263 0 2.28751 0 3.88132C0 5.44751 0.671163 6.64287 1.55214 7.60668C2.25716 8.37832 3.12 9.02419 3.88247 9.59425C4.0558 9.72354 4.22228 9.84931 4.38191 9.97154C4.69209 10.209 5.02465 10.4617 5.36144 10.6533C5.69823 10.8449 6.08279 11 6.5 11C6.91721 11 7.30177 10.8443 7.63856 10.6533C7.97595 10.4617 8.30791 10.209 8.61809 9.97154C8.77772 9.84931 8.9442 9.72354 9.11754 9.59425C9.8794 9.02419 10.7428 8.37773 11.4479 7.60668C12.3288 6.64287 13 5.44751 13 3.88132C13 2.28751 12.0719 0.905263 10.7326 0.309934C9.4634 -0.254247 7.89795 -0.0838177 6.5 1.13211Z";
const EYE_PATH = "M6.70833 10.5C9.04167 10.5 11.06 9.205 12.0983 7.29167C11.06 5.37833 9.04167 4.08333 6.70833 4.08333C4.375 4.08333 2.35667 5.37833 1.31833 7.29167C2.35667 9.205 4.375 10.5 6.70833 10.5ZM6.70833 3.5C9.36833 3.5 11.6667 5.04583 12.7517 7.29167C11.6667 9.5375 9.36833 11.0833 6.70833 11.0833C4.04833 11.0833 1.75 9.5375 0.665 7.29167C1.75 5.04583 4.04833 3.5 6.70833 3.5ZM6.70833 4.66667C8.16667 4.66667 9.33333 5.83333 9.33333 7.29167C9.33333 8.75 8.16667 9.91667 6.70833 9.91667C5.25 9.91667 4.08333 8.75 4.08333 7.29167C4.08333 5.83333 5.25 4.66667 6.70833 4.66667ZM6.70833 5.25C6.16685 5.25 5.64754 5.4651 5.26466 5.84799C4.88177 6.23088 4.66667 6.75018 4.66667 7.29167C4.66667 7.83315 4.88177 8.35246 5.26466 8.73534C5.64754 9.11823 6.16685 9.33333 6.70833 9.33333C7.24982 9.33333 7.76912 9.11823 8.15201 8.73534C8.5349 8.35246 8.75 7.83315 8.75 7.29167C8.75 6.75018 8.5349 6.23088 8.15201 5.84799C7.76912 5.4651 7.24982 5.25 6.70833 5.25Z";
const STAR_PATH = "M25.2667 22.5523L33.5791 5.81235C33.8211 5.32789 34.1932 4.92042 34.6538 4.63562C35.1144 4.35083 35.6452 4.19997 36.1867 4.19997C36.7282 4.19997 37.259 4.35083 37.7196 4.63562C38.1802 4.92042 38.5524 5.32789 38.7943 5.81235L47.1067 22.5523L65.6896 25.2527C66.2256 25.327 66.7299 25.5506 67.145 25.8978C67.56 26.245 67.8691 26.7019 68.0369 27.2164C68.2047 27.7308 68.2245 28.2821 68.094 28.8073C67.9636 29.3324 67.6881 29.8103 67.299 30.1864L53.8545 43.2085L57.0285 61.6058C57.4348 63.9671 54.9392 65.7652 52.8051 64.6518L36.1867 55.9619L19.5651 64.6518C17.4342 65.7684 14.9386 63.9671 15.3449 61.6026L18.5189 43.2053L5.07443 30.1832C4.68724 29.8069 4.4134 29.3294 4.28403 28.8052C4.15466 28.281 4.17495 27.731 4.3426 27.2177C4.51024 26.7044 4.81852 26.2485 5.23239 25.9017C5.64625 25.5549 6.14911 25.3312 6.6838 25.2559L25.2667 22.5523Z";
const HAMBURGER_PATH = "M6 40H45V34H6V40ZM6 25H45V19H6V25ZM6 4V10H45V4H6Z";
const PERSON_PATH = "M8.74393 13.0356C8.74442 10.788 9.35788 8.57879 10.5248 6.62223C11.6916 4.66566 13.3723 3.02821 15.4037 1.86879C17.4351 0.709363 19.7482 0.0673378 22.1186 0.0050147C24.4889 -0.0573084 26.836 0.462187 28.9321 1.51309C31.0282 2.56399 32.8021 4.11061 34.0816 6.00285C35.3611 7.8951 36.1029 10.0687 36.2348 12.3128C36.3668 14.5568 35.8845 16.7951 34.8347 18.8104C33.7849 20.8257 32.2034 22.5495 30.2435 23.8147C34.4641 25.2819 38.1249 27.9128 40.7547 31.3686C43.3845 34.8244 44.8631 38.9472 45 43.2062C44.9942 43.6653 44.8014 44.1046 44.4619 44.4323C44.1224 44.7599 43.6624 44.9505 43.1781 44.9643C42.6938 44.9781 42.2227 44.8139 41.863 44.5062C41.5034 44.1984 41.2832 43.7709 41.2483 43.3128C41.0994 38.6936 39.0587 34.3109 35.5587 31.0934C32.0588 27.8759 27.3746 26.0765 22.4988 26.0765C17.623 26.0765 12.9388 27.8759 9.43881 31.0934C5.93884 34.3109 3.89816 38.6936 3.74922 43.3128C3.72417 43.7771 3.5083 44.2136 3.14785 44.5288C2.78739 44.844 2.31102 45.0129 1.82079 44.9992C1.33057 44.9856 0.865467 44.7905 0.52514 44.4558C0.184812 44.1211 -0.00367639 43.6734 5.43436e-05 43.2085C0.136493 38.9491 1.61479 34.8259 4.24465 31.3696C6.87451 27.9133 10.5356 25.2821 14.7566 23.8147C12.9035 22.6184 11.3869 21.011 10.339 19.1323C9.29104 17.2536 8.74346 15.1607 8.74393 13.0356ZM22.5 3.55318C19.8467 3.55318 17.302 4.55221 15.4258 6.33051C13.5496 8.1088 12.4956 10.5207 12.4956 13.0356C12.4956 15.5505 13.5496 17.9623 15.4258 19.7406C17.302 21.5189 19.8467 22.518 22.5 22.518C25.1534 22.518 27.698 21.5189 29.5742 19.7406C31.4504 17.9623 32.5045 15.5505 32.5045 13.0356C32.5045 10.5207 31.4504 8.1088 29.5742 6.33051C27.698 4.55221 25.1534 3.55318 22.5 3.55318Z";
const BAG_PATH = "M37.8125 11.25H31.25V9C31.25 6.61305 30.3281 4.32387 28.6872 2.63604C27.0462 0.948212 24.8206 0 22.5 0C20.1794 0 17.9538 0.948212 16.3128 2.63604C14.6719 4.32387 13.75 6.61305 13.75 9V11.25H7.1875C6.60734 11.25 6.05094 11.4871 5.6407 11.909C5.23047 12.331 5 12.9033 5 13.5V38.25C5 40.0402 5.6914 41.7571 6.92211 43.023C8.15282 44.2888 9.82202 45 11.5625 45H33.4375C35.178 45 36.8472 44.2888 38.0779 43.023C39.3086 41.7571 40 40.0402 40 38.25V13.5C40 12.9033 39.7695 12.331 39.3593 11.909C38.9491 11.4871 38.3927 11.25 37.8125 11.25ZM18.125 9C18.125 7.80653 18.5859 6.66193 19.4064 5.81802C20.2269 4.97411 21.3397 4.5 22.5 4.5C23.6603 4.5 24.7731 4.97411 25.5936 5.81802C26.4141 6.66193 26.875 7.80653 26.875 9V11.25H18.125V9ZM35.625 38.25C35.625 38.8467 35.3945 39.419 34.9843 39.841C34.5741 40.2629 34.0177 40.5 33.4375 40.5H11.5625C10.9823 40.5 10.4259 40.2629 10.0157 39.841C9.60547 39.419 9.375 38.8467 9.375 38.25V15.75H13.75V18C13.75 18.5967 13.9805 19.169 14.3907 19.591C14.8009 20.0129 15.3573 20.25 15.9375 20.25C16.5177 20.25 17.0741 20.0129 17.4843 19.591C17.8945 19.169 18.125 18.5967 18.125 18V15.75H26.875V18C26.875 18.5967 27.1055 19.169 27.5157 19.591C27.9259 20.0129 28.4823 20.25 29.0625 20.25C29.6427 20.25 30.1991 20.0129 30.6093 19.591C31.0195 19.169 31.25 18.5967 31.25 18V15.75H35.625V38.25Z";

// Product data
interface Product {
  id: number;
  label: string;
  name: string;
  price: string;
}

const cleansesProducts: Product[] = [
  { id: 1, label: '5:2', name: 'FIVE: TWO CLEANSE', price: '£60.00' },
  { id: 2, label: '3:2', name: 'THREE: TWO CLEANSE', price: '£45.00' },
  { id: 3, label: 'RESET', name: '1 DAY RESET CLEANSE', price: '£30.00' },
  { id: 4, label: 'BOOST', name: 'GREEN BOOST PACK', price: '£28.00' },
];

const juiceShopProducts: Product[] = [
  { id: 1,  label: 'GLOW',   name: 'GLOW GREEN JUICE',     price: '£8.50' },
  { id: 2,  label: 'ENERGY', name: 'ENERGY BOOSTER',       price: '£8.50' },
  { id: 3,  label: 'DETOX',  name: 'DETOX BLEND',          price: '£9.00' },
  { id: 4,  label: 'CALM',   name: 'CALM & BALANCE',       price: '£8.50' },
  { id: 5,  label: 'FIRE',   name: 'FIRE SHOT',            price: '£5.50' },
  { id: 6,  label: 'VITAL',  name: 'VITAL GREENS',         price: '£9.00' },
  { id: 7,  label: 'PURE',   name: 'PURE CLEANSE',         price: '£8.50' },
  { id: 8,  label: 'RISE',   name: 'RISE & SHINE',         price: '£8.00' },
  { id: 9,  label: 'ROOT',   name: 'ROOT & SOUL',          price: '£9.00' },
  { id: 10, label: 'ZEST',   name: 'ZEST LEMON SHOT',      price: '£5.50' },
  { id: 11, label: 'BLOOM',  name: 'BLOOM BEET JUICE',     price: '£8.50' },
  { id: 12, label: 'RENEW',  name: 'RENEW CLEANSE',        price: '£9.00' },
  { id: 13, label: 'FLOW',   name: 'FLOW CUCUMBER',        price: '£8.00' },
  { id: 14, label: 'GOLD',   name: 'GOLD TURMERIC',        price: '£9.50' },
  { id: 15, label: 'CHILL',  name: 'CHILL BLEND',          price: '£8.50' },
  { id: 16, label: 'EARTH',  name: 'EARTH GREEN MIX',      price: '£8.50' },
  { id: 17, label: 'SPARK',  name: 'SPARK APPLE SHOT',     price: '£5.50' },
  { id: 18, label: 'FRESH',  name: 'FRESH MINT JUICE',     price: '£8.00' },
  { id: 19, label: 'ROOTS',  name: 'ROOTS CELERY PRESS',   price: '£9.00' },
  { id: 20, label: 'BLISS',  name: 'BLISS WATERMELON',     price: '£8.50' },
];

// --- Sub-components ---

function ProductCard({ label, name, price }: { label: string; name: string; price: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative flex flex-col items-center gap-[17px]">
      {/* Image */}
      <div className="relative w-full aspect-[1/1] overflow-hidden">
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          src={imgProduct}
        />
        {/* Icons overlay */}
        <div className="absolute top-[6px] left-[4px] flex flex-col gap-[6px]">
          <button
            onClick={() => setLiked(!liked)}
            className="bg-[#f5f5f5] flex items-center justify-center p-[3px] rounded-[9px] w-[22px] h-[18px] cursor-pointer"
          >
            <svg className="block" fill="none" width="13" height="11" viewBox="0 0 13 11">
              <path
                clipRule="evenodd"
                d={HEART_PATH}
                fill={liked ? '#d25a24' : 'black'}
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="bg-black flex items-center justify-center p-[2px] rounded-[9px] w-[22px] h-[18px] cursor-pointer">
            <svg className="block" fill="none" width="14" height="14" viewBox="0 0 14 14">
              <path d={EYE_PATH} fill="white" />
            </svg>
          </button>
        </div>
      </div>
      {/* Info */}
      <div className="flex flex-col gap-[6px] items-center text-center w-full px-1">
        <p className="text-[#d25a24] text-[11px] font-black w-full">{label}</p>
        <p className="text-black text-[11px] font-black w-full">{name}</p>
        <p className="text-[#d25a24] text-[11px] font-black w-full">{price}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <div className="h-px w-8 bg-black opacity-40" />
      <p className="font-semibold text-[20px] sm:text-[28px] text-black text-center tracking-[1.8px] whitespace-nowrap">
        {children}
      </p>
      <div className="h-px w-8 bg-black opacity-40" />
    </div>
  );
}

function Header() {
  const [cartCount] = useState(0);
  return (
    <header className="bg-[#113722] flex h-[61px] items-center justify-between px-4 sm:px-6 w-full shrink-0">
      {/* Logo */}
      <div className="h-[38px] w-[110px] relative overflow-hidden">
        <img alt="KOOX" className="absolute h-full w-full object-contain object-left" src={imgLogo} />
      </div>
      {/* Right icons */}
      <div className="flex gap-3 sm:gap-4 items-center">
        {/* Instagram */}
        <div className="size-[36px] sm:size-[40px] relative overflow-hidden shrink-0">
          <img alt="Instagram" className="absolute inset-0 w-full h-full object-cover" src={imgInstagram} />
        </div>
        {/* Menu */}
        <button className="size-[36px] sm:size-[40px] flex items-center justify-center shrink-0">
          <svg fill="none" width="36" height="36" viewBox="0 0 45 45">
            <path d={HAMBURGER_PATH} fill="white" />
          </svg>
        </button>
        {/* Account */}
        <button className="size-[36px] sm:size-[40px] flex items-center justify-center shrink-0">
          <svg fill="none" width="36" height="36" viewBox="0 0 45 45">
            <path d={PERSON_PATH} fill="white" />
          </svg>
        </button>
        {/* Cart */}
        <div className="relative shrink-0">
          <button className="size-[36px] sm:size-[40px] flex items-center justify-center">
            <svg fill="none" width="36" height="36" viewBox="0 0 45 45">
              <path d={BAG_PATH} fill="white" />
            </svg>
          </button>
          <span className="absolute -top-1 -right-1 bg-white text-black text-[11px] font-black rounded-full size-[20px] flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full" style={{ minHeight: '400px', height: 'clamp(400px, 60vw, 625px)' }}>
      {/* Background */}
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgHero} />
      <div className="absolute inset-0 bg-black/35" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12">
        <p className="font-semibold text-[clamp(22px,5vw,36px)] text-white text-center tracking-[1.8px] leading-tight max-w-sm sm:max-w-lg">
          ORGANIC JUICES &amp; CLEANSES MADE TO ORDER
        </p>
        <div className="mt-6 bg-[#113722] px-4 py-2 relative">
          <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#6b1229] -z-10" />
          <p className="font-black text-[10px] sm:text-[11px] text-white text-center tracking-wide">
            GET YOUR ORDER FROM OUR LAB TO YOUR DOOR IN 24H
          </p>
        </div>
      </div>
    </div>
  );
}

function RatingSection() {
  return (
    <section className="bg-[#113722] w-full py-12 px-4">
      <div className="max-w-lg mx-auto flex flex-col items-center gap-5 text-center">
        <p className="font-black text-[clamp(20px,5vw,28px)] text-white tracking-[1.4px] leading-tight">
          HIGHEST RATED JUICE BRAND IN LONDON
        </p>
        <p className="font-black text-[clamp(28px,7vw,36px)] text-white tracking-[1.8px]">
          4.8/5
        </p>
        {/* Star */}
        <div className="w-[60px] h-[57px]">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 74 70.9166">
            <path
              d={STAR_PATH}
              fill="#FFC107"
              stroke="#FFC107"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.17155"
            />
          </svg>
        </div>
        <p className="font-extrabold text-[16px] sm:text-[18px] text-white">+10,000 reviews</p>
        <button className="py-2 px-4">
          <span className="font-extrabold text-[16px] sm:text-[18px] text-[#d25a24]">View All Reviews</span>
        </button>
        <p className="font-extrabold text-[14px] sm:text-[16px] text-white max-w-xs">
          based on customers' ratings on Deliveroo &amp; Uber Eats from 2022 to 2024
        </p>
      </div>
    </section>
  );
}

function OrganicSection() {
  return (
    <section className="relative w-full" style={{ minHeight: '400px' }}>
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgOrganicBg} />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6 py-16">
        <div className="flex flex-col gap-5 items-center text-center text-white font-semibold">
          <p className="text-[clamp(28px,7vw,36px)] tracking-[1.8px]">100%</p>
          <div className="text-[clamp(22px,5vw,30px)] tracking-[1.5px]">
            <p>ORGANIC</p>
            <p>COLD-PRESSED</p>
            <p>RAW</p>
          </div>
          <p className="text-[clamp(28px,7vw,36px)] tracking-[1.8px]">0%</p>
          <div className="text-[clamp(22px,5vw,30px)] tracking-[1.5px]">
            <p>ADDITIVES</p>
            <p>PASTEURISATION</p>
            <p>HPP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function KooxCleansesSection() {
  return (
    <section className="bg-white w-full py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
        <SectionTitle>Koox cleanses</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {cleansesProducts.map((p) => (
            <ProductCard key={p.id} label={p.label} name={p.name} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="bg-[#113722] w-full py-8 px-5">
      <div className="max-w-lg mx-auto flex flex-col gap-4 items-center text-center">
        <p className="font-extrabold text-[clamp(15px,4vw,18px)] text-white">
          GET 15% OFF YOUR FIRST PURCHASE
        </p>
        <p className="font-extrabold text-[clamp(15px,4vw,18px)] text-white">
          CODE: KOOXORGANIC
        </p>
      </div>
    </section>
  );
}

function JuiceShopSection() {
  return (
    <section className="bg-[#efefef] w-full py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
        <SectionTitle>JUICE SHOP</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
          {juiceShopProducts.map((p) => (
            <ProductCard key={p.id} label={p.label} name={p.name} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyKooxSection() {
  const features = [
    { img: imgOrganicIcon, label: 'ORGANIC' },
    { img: imgUnprocessed, label: 'UNPROCESSED' },
    { img: imgRaw, label: 'RAW' },
    { img: imgGlass, label: 'GLASS BOTTLES' },
    { img: imgMadeToOrder, label: 'MADE-TO-ORDER' },
  ];

  return (
    <section className="bg-white w-full py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center text-center">
          <p className="font-extrabold text-[clamp(16px,4vw,18px)] text-black">WHY KOOX</p>
          <p className="font-black text-[clamp(13px,3vw,15px)] text-black max-w-xs sm:max-w-sm leading-[20px]">
            KOOX Juices are designed to keep vitamins and nutrients at the highest level
          </p>
        </div>
        {/* Feature icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 w-[100px] sm:w-[120px]">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] relative overflow-hidden flex items-center justify-center">
                <div className="-scale-y-100">
                  <img
                    alt={f.label}
                    className="w-[70px] h-[70px] sm:w-[84px] sm:h-[84px] object-cover"
                    src={f.img}
                  />
                </div>
              </div>
              <p className="font-extrabold text-[14px] sm:text-[16px] text-black text-center">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main App ---
export default function App() {
  return (
    <div className="flex flex-col items-stretch w-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RatingSection />
      <OrganicSection />
      <KooxCleansesSection />
      <PromoBanner />
      <JuiceShopSection />
      <WhyKooxSection />
    </div>
  );
}
