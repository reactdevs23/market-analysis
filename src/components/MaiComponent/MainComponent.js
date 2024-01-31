import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ heading, data }) => {
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
              style={{ "--bg": el.bg }}
              key={id}
              className={`${styles.card} ${styles[`items-${data.length}`]}  ${
                data.length > 5 && styles[`items-5`]
              }`}
            >
              <div className={styles.header} style={{ background: el.bg }}>
                <span className={styles.underline}>_</span>
                <i className="fa-regular fa-square"></i>
                <i className="fa-solid fa-xmark"></i>
              </div>

              <p className={styles.id}>
                {id + 1 < 10 ? `0${id + 1}` : id + 1}.
              </p>

              <h4 className={styles.title}>{el.title}</h4>
              <p className={styles.info}>{el.info}</p>
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
