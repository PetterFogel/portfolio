import classes from "../../styles/navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Petter</h2>
      <div className={classes.burgerMenu}>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
      </div>
      <div className={classes.fixedEmail}>petterfogel96@gmail.com</div>
    </header> 
  );
}

export default Navigation;
