import React, { useEffect, useRef } from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ heading, data }) => {
  const titleRefs = useRef([]);

  useEffect(() => {
    // Get the maximum height among all title elements
    const titles = titleRefs.current.map(
      (ref) => ref.getBoundingClientRect().height
    );
    const maxTitleHeight = Math.max(...titles);

    // Set the maximum height to all title elements using the titleRefs
    titleRefs.current.forEach((ref) => {
      ref.style.height = `${maxTitleHeight}px`;
    });
  }, [data]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h2
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>

        <div className={styles.cards}>
          {data.map((el, id) => (
            <div
              style={{
                "--bg": el.headerBg,
                "--shadowColor": el.shadowColor,
                "--headerIconColor": el.headerIconColor,
                "--borderColor": el.borderColor,
              }}
              key={id}
              className={`${styles.card} ${styles[`items-${data.length}`]}  ${
                data.length > 5 && styles[`items-5`]
              }`}
            >
              <div
                className={styles.header}
                style={{ background: el.headerBg }}
              >
                <span className={styles.underline}>_</span>
                <i className="fa-regular fa-square"></i>
                <i className="fa-solid fa-xmark"></i>
              </div>

              <p className={styles.id}>
                {id + 1 < 10 ? `0${id + 1}` : id + 1}.
              </p>

              <div className={styles.titleContainer}>
                <h4
                  ref={(el) => (titleRefs.current[id] = el)}
                  className={styles.title}
                >
                  {el.title}
                </h4>
              </div>

              <div className={styles.infoContainer}>
                <p className={styles.info}>{el.info}</p>
              </div>

              <div className={styles.iconContainer}>
                <img src={el.icon} alt="#" className={styles.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
