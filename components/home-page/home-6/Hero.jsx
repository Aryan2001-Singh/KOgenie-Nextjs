"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from 'next/image';

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        <Image
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
          width={50}  // Example value
          height={50} 
        />
        <Image
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
          width={50}  // Example value
          height={50} 
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                {/* <Image
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                /> */}
                Create ads that boost sales in just 5 minutes
                <span className="position-relative d-inline-block"></span>
                &amp; make life easier.
              </h1>
              <p className="text-lg mb-75 pt-20 lg-mb-50 lg-pt-10">
                KOgenie makes your ad in just 5 minutes so you can launch ad
                campaigns swiftly, helping you get more people to buy your
                product/service faster.
              </p>
              <div className="d-sm-flex justify-content-center align-items-center">
                <Link
                  href="/sign-up"
                  className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
                >
                  Try Free Now
                </Link>
                <div
                  role="button"
                  className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play" />
                  <div className="ps-3 text-start">
                    <span className="d-block">Watch</span>
                    <strong className="fs-18 fw-500 tx-dark d-block">
                      Intro video
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            <div className="bg-wrapper">
              <Image
                src="/images/media/img_05.jpg"
                alt="media"
                className="lazy-img main-screen w-100"
                width={1214}
                height={729}
              />
            </div>
            {/* /.bg-wrapper */}
            <Image
              src="/images/shape/shape_28.svg"
              alt="media"
              className="lazy-img shapes shape-one"
              width={50}
                height={50}
            />
            <Image
              src="/images/shape/shape_29.svg"
              alt="media"
              className="lazy-img shapes shape-two"
              width={50}
                height={50}
            />
            <Image
              src="/images/shape/shape_30.svg"
              alt="media"
              className="lazy-img shapes shape-three"
              width={50}
                height={50}
            />
            <Image
              src="/images/shape/shape_31.svg"
              alt="media"
              className="lazy-img shapes shape-four"
              width={50}
                height={50}
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
