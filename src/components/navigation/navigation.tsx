import classes from "../../styles/navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Petter</h2>
      <div className={classes.burgerMenu}>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
      </div>
      <div className={classes.fixedEmail}>
        <a className={classes.a} href="mailto:petterfogel96@gmail.com">petterfogel96@gmail.com</a>
      </div>
    </header>
  );
}

export default Navigation;
