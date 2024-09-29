import { FC } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
type Iprops = {
  id: number | undefined;
  onclick: (val: any) => void;
};
export const Pizza: FC<Iprops> = (props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image src={"/pizza.png"} height={350} width={350} alt="pizza" />
      <div className={styles.pizzaContainerInfo}>
        <p className={styles.pizzaName}>Marghrita</p>
        <p className={styles.toppingsList}>
          Tomato,Mozzarella, Bell Peppers, Onions, Olives{" "}
        </p>
        <div className={styles.amountContainer}>
          <p className={styles.amount}>
            <span>150</span>
            <span style={{ fontSize: "14px", paddingTop: "10px" }}>Birr</span>
          </p>
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => {
              if (props.id) {
                router.push({
                  pathname: "/orders",
                  query: {
                    id: props.id,
                  },
                });
              }
            }}
          >
            Order
          </Button>
        </div>
        <div className={styles.pizzaAdditionalInfo}>
          <Image
            src={"/pizza.png"}
            height={80}
            width={80}
            alt="restaurant information"
          />
          <p className={styles.restaurantName}>Azmera Pizza</p>
        </div>
      </div>
    </div>
  );
};
