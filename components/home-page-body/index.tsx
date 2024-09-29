import { FC } from "react";
import styles from "./index.module.css";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Button,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { SearchOutlined } from "@mui/icons-material";
import { Pizza } from "../pizza";
import { RestaurantInfo } from "../restaurant-info";

type Iprops = {};
export const HomePageBody: FC<Iprops> = (props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.informationUpper}>
          <div className={styles.textInformationContainer}>
            <div className={styles.textInformation}>
              <p className={styles.orderus}>Order us</p>
              <p className={styles.orderusinfo}>
                In publishing and graphics design Lorem Ipsum is a place holder
                text commonly used to demonstrate the visual form of a document
                or typeface out.
              </p>

              <div className={styles.searchbar}>
                <input className={styles.textInput} placeholder="Search" />
                <Button variant="text" className={styles.button}>
                  <SearchOutlined />
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={"/pizza.png"}
              height={1000}
              width={1000}
              alt="pizza image"
            />
          </div>
        </div>
        <div className={styles.informationBottomOuter}>
          <div className={styles.informationBottom}>
            <div className={styles.featured}>
              <p className={styles.blockLabel}>Featured Pizza</p>
              <div className={styles.slider}>
                this should be the carousel component but material ui doesnot
                have any
              </div>
            </div>

            <div className={styles.topRestaurantsContainer}>
              <p className={styles.blockLabel}>Top Restaurants</p>
              <div className={styles.restaurantInfoContainer}>
                <RestaurantInfo />
                <RestaurantInfo />
                <RestaurantInfo />
                <RestaurantInfo />
              </div>
            </div>

            <div className={styles.popularContainer}>
              <p className={styles.blockLabel}>Popular Pizzas</p>
              <div className={styles.blockInfoContainer}>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
              </div>
            </div>

            <div className={styles.fastingContainer}>
              <p className={styles.blockLabel}>Fasting</p>
              <div className={styles.blockInfoContainer}>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
