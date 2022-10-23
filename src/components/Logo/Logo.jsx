import styles from "./Logo.module.css";

export const Logo = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <img
        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
        alt="Logo"
        className={styles.img}
      />
      <span className={styles.name}>Tom</span>
    </div>
  );
};
