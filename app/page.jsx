import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import Testimonial from "@/components/home-page/home-6/Testimonial";
import CircleBgShape from "@/components/home-page/home-6/CircleBgShape";

import Pricing from "@/components/home-page/home-6/Pricing";

import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Image from "next/image";

const SassProduct = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Feature Section Three */}
      <div className="fancy-feature-three pt-300 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-right"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Integrates your tools
                  </div>
                  <h2 className="main-title fw-500">
                    Connect our software with the tools you use.
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  Our platform makes it easy to integrate your existing tools
                  for a seamless experience.
                </p>
                <Link href="/pages-menu/about-us-v1" className="btn-four fw-500">
                  Learn More
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-6 ms-auto"
              data-aos="fade-left"
            >
              <ScreenHolder />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section Four */}
      <div className="fancy-feature-four pt-250 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 className="main-title fw-500">
                  Bring all team management & task together
                </h2>
              </div>
              <p className="text-lg mt-40 mb-100 lg-mt-20 lg-mb-50">
                We help you bring all your team management and tasks into one
                simple platform.
              </p>
            </div>
          </div>
          <ProductTabs />
        </div>
      </div>

      {/* Feature Section Five */}
      <div className="fancy-feature-five pt-300 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Over 150,000+ clients
                  </div>
                  <h2 className="main-title fw-500">
                    Why you choose our tools.
                  </h2>
                </div>
                <p className="text-lg mt-40 mb-75 lg-mt-30 lg-mb-50">
                  Our tools are trusted by over 150,000 clients worldwide.
                </p>
                <Link href="/sign-up" className="btn-four fw-500">
                  Try Free Now
                </Link>
              </div>
            </div>
            <div className="col-md-6 order-md-first" data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <TagList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section Six */}
      <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Let’s Discover our all features
                </h2>
              </div>
            </div>
            <Features />
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <Image
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                    width={50} // Add width
                    height={50} // Add height
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what our clients say about us.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial />
            </div>
          </div>
        </div>
        <CircleBgShape />
      </div>

      {/* Pricing Section */}
      <div className="pricing-section-one position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Pricing Plan</div>
                <h2 className="main-title fw-500">
                  No hidden charges! Choose your plan.
                </h2>
              </div>
            </div>
          </div>
          <Pricing />
        </div>
      </div>

      {/* Fancy Short Banner Two */}
      <div
        className="fancy-short-banner-two mt-150 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper ms-xxl-4 me-xxl-4 position-relative">
            <div className="inner-wrapper m-auto">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start sm-mb-30">
                  <h6 className="mb-5">Need a Custom Plan?</h6>
                  <h3 className="fw-normal m0">Send us a message for help.</h3>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <Link href="/contact" className="btn-six fw-500">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default SassProduct;
