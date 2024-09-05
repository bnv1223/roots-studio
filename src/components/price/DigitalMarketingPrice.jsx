import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";
import { Color } from "../../../public/assets/gsap-plugins/chroma.min";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });

        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Pricing Table</h2>
                <h3 className="sec-title title-anim">
                  Be kind to your <br />
                  mind
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>
                      Design should enrich our day
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header>
                      Bring their individual experience and creative
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          This is the second `${`item's`}` accordion body. It is
                          hidden by default, until the collapse plugin adds the
                          appropriate classes that we use to style each element.
                          These classes.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header>
                      Human centred design to challenges
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header>
                      Design should enrich our day
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header>
                      Developing core web applications
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
  <div className="price__table">
    {/* First section (white background, no text overrides) */}
    <div className="price__item animation_from_bottom " style={{backgroundColor:"white", color:"black"}}>
      <div className="price__icon">
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
      <div className="price__info" style={{color:"black"}}>
        <h2 className="price__type" style={{color:"black"}}>Yearly</h2>
        <h3 className="price__title" style={{color:"black"}}>14 days free</h3>
        <p style={{color:"black"}}>Subscription fee is $129.99 USD and automatically renews each year.</p>
      </div>
      <div className="price__amount">
        <p style={{color:"black"}}>$129<span> .99</span></p>
      </div>
    </div>

    {/* Second section (grey background) */}
    <div className="price__item animation_from_top custom-grey-bg" style={{backgroundColor:"black" ,color:"white"}}>
      <div className="price__icon">
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
      <div className="price__info" style={{color:"white"}}>
        <h2 className="price__type" style={{color:"white"}}>Monthly</h2>
        <h3 className="price__title" style={{color:"white"}}>7 days free</h3>
        <p style={{color:"white"}}>Subscription fee is $12.99 USD and automatically renews each year.</p>
      </div>
      <div className="price__amount" style={{color:"white"}}>
        <p style={{color:"white"}}>$12<span> .99</span></p>
      </div>
    </div>

    {/* Third section (white background with 3 vertical sections at the bottom) */}
    <div className="price__item animation_from_top custom-white-bg">
      <div className="price__icon">
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
      <div className="price__info">
        <h2 className="price__type">Monthly</h2>
        <h3 className="price__title">7 days free</h3>
        <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
      </div>
      <div className="price__amount">
        <p>$12<span> .99</span></p>
      </div>
      <div className="price__bottom-sections">
        <div className="bottom-section">Section 1</div>
        <div className="bottom-section">Section 2</div>
        <div className="bottom-section">Section 3</div>
      </div>
    </div>
  </div>

  <div className="price__btn btn_wrapper">
    <Link href="/contact" className="wc-btn-black btn-hover btn-item">
      <span></span> Try it <br /> Free Now <i className="fa-solid fa-arrow-right"></i>
    </Link>
  </div>
</div>




          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
