import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";

const slider1 = [
  "GSAP",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Typescript",
  "GSAP",
];

const slider2 = [
  "MONGODB",
  "DOCKER",
  "AWS",
  "SVELTE",
  "REACTNATIVE",
  "ELECTRON",
  "SQL",
  "MONGODB",
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div data-scroll data-scroll-speed={0.1} className={styles.title}>
        <Rounded className={styles.button}>
          <p>Skills</p>
        </Rounded>
      </div>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              {project}
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              {project}
            </div>
          );
        })}
      </motion.div>

      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
