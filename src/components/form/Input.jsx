import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, hadlerOnchange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={hadlerOnchange}
        value={value}
      />
    </div>
  );
}

export default Input;
