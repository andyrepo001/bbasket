import { useState } from "react";
import { makePostRequest } from "@/lib/use-client-side-data";
import Input from "@/components/Input/Input";
import styles from "./Login-modal.module.css";
import Button from "@/components/Button/Button";
import login from "@/assets/login.png";
import VerifyModal from "../Verify-modal/Verify-modal";
import verify from "@/assets/verify.png";
import { useLoginModal } from "@/hooks/use-login-modal";

export default function LoginModal() {
  const [values, setValues] = useState({
    auth_username: "88",
    auth_mode: "mobile",
  });
  const [otp, setOtp] = useState("");
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const modal = useLoginModal();

  // Handle mobile number input
  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: `88${e.target.value}` });
  };

  // Handle OTP input
  const handleOtp = (e) => {
    setOtp(otp + e.target.value);
  };

  // Submit number for verification
  const handleSubmit = (e) => {
    const data = makePostRequest(e, "customer_authenticate", values);

    if (data.status === "") {
      return;
    } else {
      setShowVerifyModal(true);
    }
  };

  // verify otp
  const handleVerification = async (e) => {
    const data = makePostRequest(e, "customer_mobile_pin_authenticate", {
      ...values,
      auth_password: otp,
    });

    const res = await data;

    if (res.status === "") return;

    const cookie = res.data;
    document.cookie = `bcli=${cookie.set_token} path=/; SameSite=Lax`;
    modal.onClose();
  };

  return (
    <>
      <form
        className={styles.login_modal}
        onSubmit={!showVerifyModal ? handleSubmit : handleVerification}
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
          <VerifyModal handleChange={handleOtp} />
        )}
        <Button
          label={!showVerifyModal ? "login" : "verify"}
          icon={!showVerifyModal ? login : verify}
          primary
        />
      </form>
    </>
  );
}
