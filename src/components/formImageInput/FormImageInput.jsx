import cameraIcon from "../../assets/images/cameraIcon.svg";
import styles from "./FormImageInput.module.css";
import { useGlobalContext } from "../../context/GlobalContext";
const FormImageInput = () => {
  const { userData, setUserData } = useGlobalContext();
  console.log(userData);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setUserData((prevUserData) => ({
          ...prevUserData,
          image: dataURL,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <label htmlFor="image" className={styles["form-add-image"]}>
        {/* check if userdata has image propery that is not empty string if it does then use that image */}
        {userData.image ? (
          <img src={userData.image} alt="Selected Image" />
        ) : (
          <img src={cameraIcon} alt="Add Image Icon" />
        )}
      </label>
      <input
        type="file"
        name="image"
        id="image"
        style={{ display: "none" }}
        onChange={handleImage}
      />
    </>
  );
};

export default FormImageInput;
