import classes from "../../styles/global.module.css";

function Projects() {
    return(
        <section className={classes.section}>
            <h2 className={classes.sectionTitle}>What I've done</h2>
            <p className={classes.paragraph}>All my projects can be viewed at my github.</p>
            <div className={classes.imageContainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Projects;