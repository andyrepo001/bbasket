import { useState } from "react";
import { makePostRequest } from "@/lib/use-client-side-data";
import Input from "@/components/Input/Input";
import styles from "./Login-modal.module.css";
import Button from "@/components/Button/Button";
import login from "@/assets/login.png";
import VerifyModal from "../Verify-modal/Verify-modal";
import verify from "@/assets/verify.png";

export default function LoginModal() {
  const [values, setValues] = useState({
    auth_username: "88",
    auth_mode: "mobile",
  });
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: `88${e.target.value}` });
  };

  const handleSubmit = (e) => {
    const data = makePostRequest(e, "customer_authenticate", values);

    if (data.status === "") {
      return;
    } else {
      setShowVerifyModal(true);
    }
  };

  return (
    <>
      <form
        className={styles.login_modal}
        onSubmit={
          !showVerifyModal
            ? handleSubmit
            : () => {
                alert("do later");
              }
        }
      >
        {!showVerifyModal ? (
          <h4 className={styles.tooltip}>
            login with your mobile number <span className={styles.ast}>*</span>
          </h4>
        ) : (
          <h4 className={styles.tooltip}>
            {`We've sent a 4-digit one time PIN in your phone +${values.auth_username}`}
          </h4>
        )}
        {!showVerifyModal ? (
          <Input
            border
            placeholder={"(017...)"}
            handleChange={handleValues}
            name={"auth_username"}
            type="tel"
            required
          />
        ) : (
          <VerifyModal />
        )}
        <Button
          label={!showVerifyModal ? "login" : "verify"}
          icon={!showVerifyModal ? login : verify}
        />
      </form>
    </>
  );
}
