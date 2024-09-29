import { FC } from "react";
import styles from "./index.module.css";
import Image from "next/image";
type Iprops = {};
export const RestaurantInfo: FC<Iprops> = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={"/pizza.png"}
            height={50}
            width={50}
            alt="restaurant logo"
          />
          <p className={styles.pizzaName}>Azmera Pizza</p>
        </div>
        <p className={styles.restaurantInfo}>
          this is information about the specific restaurant
        </p>
      </div>
      <div className={styles.orderCountContainer}>
        <Image src={"/pizza.png"} height={100} width={100} alt="" />
        <div className={styles.orderCountInnerContainer}>
          <p className={styles.numberOfOrder}>Number of Order</p>
          <p className={styles.orderCount}>2K</p>
        </div>
      </div>
    </div>
  );
};
