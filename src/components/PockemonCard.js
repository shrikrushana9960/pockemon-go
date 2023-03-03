import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import styles from "./sub_styles/pockemoncard.module.scss";

const PockemonCard = ({ item }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Card className={styles.container} about="" loading={loading}>
          {" "}
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      ) : (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                item.url.split("/")[6]
              }.png`}
              alt={item.name}
              className={styles.image}
            />
          </div>
          <p className={styles.title}>{item.name}</p>
        </div>
      )}
    </>
  );
};

export default PockemonCard;
