import React, { useEffect } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const projects = [
    {
      title: "AlgoArena",
      type: "Personal Project",
      description: "Content Pending",
      image: "/images/algoarena.png",
      color: "#21242b",
      stack: ["React", "Node"],
    },
    {
      title: "Comeata",
      type: "Intern Project",
      description: "Content Pending",
      image: "/images/comeata.png",
      color: "#d6d7dc",
      stack: ["React", "Node"],
    },
    {
      title: "SHUYI",
      type: "Intern Project",
      description: "Content Pending",
      image: "/images/shuyi.webp",
      color: "#d6d7dc",
      stack: ["React", "Node"],
    },
    {
      title: "Relynk",
      type: "Intern Project",
      description: "Content Pending",
      image: "/images/relynk.png",
      color: "#d6d7dc",
      stack: ["React", "Node"],
    },
  ];

  useEffect(() => {
    const details = gsap.utils.toArray(
      `.${styles.desktopContentSection}:not(:first-child)`,
    );
    const photos = gsap.utils.toArray(
      `.${styles.desktopPhoto}:not(:first-child)`,
    );

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(`.${styles.desktopPhoto}`);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: `.${styles.gallery}`,
        start: "top top",
        end: "bottom bottom",
        pin: `.${styles.right}`,
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        console.log("cleanup");
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.kill();
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.spacer}></div>
      <div data-scroll data-scroll-speed={0.1} className={styles.title}>
        <Rounded className={styles.button}>
          <p>Projects</p>
        </Rounded>
      </div>
      <div className={styles.gallery}>
        <div className={styles.left}>
          <div className={styles.desktopContent}>
            {projects.map((project) => (
              <div className={styles.desktopContentSection}>
                <p></p>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.mobileContent}>
            <div className={`${styles.mobilePhoto} ${styles.red}`}></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div className={`${styles.mobilePhoto} ${styles.green}`}></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>

            <div className={`${styles.mobilePhoto} ${styles.pink}`}></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div className={`${styles.mobilePhoto} ${styles.blue}`}></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div className={styles.desktopPhotos}>
            {projects.map((project) => (
              <div
                className={`${styles.desktopPhoto}`}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image src={project.image} alt="image" fill={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
