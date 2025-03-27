import classes from "../css/Button.module.css";
export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.active }` : `${classes.inActive}`
      }
    >
      {children}
    </button>
  );
}
