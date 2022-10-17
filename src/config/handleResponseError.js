/* eslint-disable import/no-anonymous-default-export */
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

const redirect = () => {
  localStorage.setItem("user_token", null);
  localStorage.setItem("user_token", null);
  toaster.notify("Redirecting to Login", {
    duration: null,
    position: "bottom",
  });
  setTimeout(() => (window.location.href = "/login"), 1000);
};

export default (error) => {
  if (error?.data) {
    const { errors, message } = error.data;

    if (message) {
      toaster.notify(message, {
        duration: "4000",
        position: "bottom",
      });
      if (message === "token_expired") {
        redirect();
      }
    }
    if (errors && typeof errors === Array) {
      errors.forEach((error) => {
        toaster.notify(error.code, {
          duration: "4000",
          position: "bottom",
        });
      });
  }
    }
    
};
