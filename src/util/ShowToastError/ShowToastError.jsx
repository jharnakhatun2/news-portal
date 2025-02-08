import { toast } from "react-toastify";

const ShowToastError = (message) => {
    toast.error(`Error: ${message}`, {
        position: "bottom-right",
        autoClose: 2000,
        style: { backgroundColor: "#A32727", color: "#fff" },
      });
};

export default ShowToastError;
