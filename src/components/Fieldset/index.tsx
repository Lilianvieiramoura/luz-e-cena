import styles from './Fieldset.module.css';

type FieldsetProps = {
  variant?: "primary" | "second";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ( {children, variant="primary"} : FieldsetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.second}`}
    >
      {children}
    </fieldset>
  )
}

export default Fieldset