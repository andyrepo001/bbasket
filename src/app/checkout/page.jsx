"use client";
import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { getCookie } from "cookies-next";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import CartItem from "@/components/Cart/CartItem/CartItem";
import { useCartStore } from "@/hooks/use-cart.js";
import Select from "@/components/Select/Select";
import Input from "@/components/Input/Input";
import CartTotal from "@/components/Cart/Cart-total/Cart-total";
import { useFetch } from "@/lib/use-client-side-data";

export default function Checkout() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const deliverySettings = useFetch("delivery_settings");
  const location = useFetch("location_area/8");
  const cart = useCartStore();

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    setUser(getCookie("bcli"));
  }, []);

  // if (!user) {
  //   return;
  // }

  return (
    <Container>
      <div className={styles.checkout}>
        <div className={styles.checkout_wrapper}>
          <div className={styles.checkout_col}>
            <Header header="my basket items" />
            <div className={styles.checkout_products}>
              {/* All products visible here */}
              {cart.cartItems?.map((item, indx) => (
                <CartItem item={item} key={indx} />
              ))}
            </div>
            {/* Total */}
            <CartTotal />
          </div>
          <div className={styles.checkout_col}>
            <Header header="my basket items" />
            <div className={styles.delivery_time}>
              {/* Dates start */}
              <div className={styles.input_wrapper}>
                <label className={styles.label}>
                  want to receive by...
                  <span className={styles.ast}> *</span>
                </label>
                <select
                  onChange={handleDate}
                  required
                  className={`${styles.input} ${styles.full} ${styles.border}`}
                >
                  <option value="">Select an option</option>
                  {deliverySettings?.data?.date &&
                    Object.keys(deliverySettings?.data?.date).map(
                      (index, key) => (
                        <option
                          value={deliverySettings?.data?.date[index]}
                          key={key}
                        >
                          {deliverySettings?.data?.date[index]}
                        </option>
                      )
                    )}
                </select>
              </div>
              {/* Dates end */}

              {/* Time start */}
              <div className={styles.input_wrapper}>
                <label className={styles.label}>
                  on time of...
                  <span className={styles.ast}> *</span>
                </label>
                <select
                  required
                  className={`${styles.input} ${styles.full} ${styles.border}`}
                >
                  <option value="">Select an option</option>
                  {!date.includes("Today") &&
                    deliverySettings?.data?.time?.rest?.map((data, indx) => (
                      <option value="" key={indx}>
                        {data.delv_time_label}
                      </option>
                    ))}
                  {date.includes("Today") &&
                    deliverySettings?.data?.time?.rest &&
                    Object.keys(deliverySettings?.data?.time?.today).map(
                      (index, key) => (
                        <option value="" key={key}>
                          {
                            deliverySettings?.data?.time?.today[index]
                              .delv_time_label
                          }
                        </option>
                      )
                    )}
                </select>
              </div>
              {/* Time end */}
            </div>

            <Header header="delivery location" />
            <div className={styles.location}>
              <Select
                required
                label="Location"
                placeholder="select location"
                selectData={location?.data}
              />
              <Input full label="Contact Person" border required type="text" />
              <Input full label="mobile" border required type="number" />
              <Input full label="address" border required type="text" />
            </div>

            <Header header="payment options" />
          </div>
        </div>
      </div>
    </Container>
  );
}
