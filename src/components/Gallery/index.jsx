import React, { useEffect } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const projects = [
    {
      title: "AlgoArena",
      type: "Personal Project",
      description:
        "AlgoArena is a fullstack online coding judge that allows programmers improve their problem solving and DSA skills.",
      image: "/images/algoarena.png",
      color: "#21242b",
      stack: [
        "react.svg",
        "reactquery.svg",
        "vitejs.svg",
        "typescript.svg",
        "nodejs.svg",
        "postgresql.svg",
      ],
      link: "https://algoarena.subrahmanyam.site/",
    },
    {
      title: "Comeata",
      type: "Intern Project",
      description:
        "Comeata is an innovative, comprehensive food management platform tailored to support and scale the endeavors of food entrepreneurs.",
      contribution:
        "Worked as Frontend Lead for the entire project managing other interns.",
      image: "/images/comeata.png",
      color: "#d6d7dc",
      stack: [
        "nextjs.svg",
        "reactquery.svg",
        "typescript.svg",
        "nodejs.svg",
        "directus.svg",
        "postgresql.svg",
      ],
      link: "https://trycomeata.com/",
    },
    {
      title: "SHUYI",
      type: "Intern Project",
      description:
        "SHUYI is a cutting-edge e-commerce application specifically designed for the purchase of construction materials, offering a streamlined shopping experience.",
      contribution:
        "Developed an Admin Panel using Next.js for the Customer Relation Management(CRM) and Order Management",
      image: "/images/shuyi.webp",
      color: "#d6d7dc",
      stack: [
        "nextjs.svg",
        "reactquery.svg",
        "typescript.svg",
        "nodejs.svg",
        "postgresql.svg",
      ],
      link: "https://play.google.com/store/apps/details?id=com.weframe.shyui&pcampaignid=web_share",
    },
    {
      title: "Relynk",
      type: "Intern Project",
      description:
        "Relynk is an Oslo-based Proptech company that’s making waves in the real estate industry. Their mission is to drive innovation by simplifying access to real-time data from commercial buildings. ",
      contribution:
        "Assisted in the revamp of landing page UI and docs UI along with the integration of Directus CMS",
      image: "/images/relynk.png",
      color: "#d6d7dc",
      stack: [
        "nextjs.svg",
        "tailwindcss.svg",
        "typescript.svg",
        "directus.svg",
      ],
      link: "https://relynk.io/",
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
            {projects.map((project, index) => (
              <div key={index} className={styles.desktopContentSection}>
                <h1>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className={styles.button2}>
                      <p>{project.type}</p>
                    </div>
                  </div>
                  {project.title}
                </h1>
                <div style={{ fontSize: "1.5rem" }}>
                  {project.description}
                  {project.contribution && (
                    <p style={{ fontSize: "1.25rem" }}>
                      <span style={{ fontFamily: "monospace" }}>
                        Contribution:
                      </span>{" "}
                      {project.contribution}
                    </p>
                  )}
                </div>
                <div style={{ fontSize: "1.25rem", fontFamily: "monospace" }}>
                  Technologies Used:
                  <p style={{ display: "flex", gap: "1rem" }}>
                    {project.stack.map((item, index) => (
                      <Image
                        key={index}
                        src={"/images/" + item}
                        width={50}
                        height={50}
                      />
                    ))}
                  </p>
                  <Link
                    href={project.link}
                    style={{
                      display: "flex",
                    }}
                  >
                    <Rounded>
                      <p
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontSize: "1.25rem",
                          lineHeight: "0",
                        }}
                      >
                        Link
                      </p>
                    </Rounded>
                  </Link>
                </div>
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
              passion, love, and anger. It&apos;s a bold and attention-grabbing
              color that can evoke feelings of excitement, warmth, and energy.
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
            {projects.map((project, index) => (
              <div
                key={index}
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
