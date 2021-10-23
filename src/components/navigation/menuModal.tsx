import { FC } from "react";
import classes from "../../styles/navigation.module.css";
import { GrClose } from "react-icons/gr";
import { animated, useSpring } from "react-spring";
import { Link } from "react-scroll";

type MenuModalProps = {
  isOpen: boolean;
  onCloseModalClick: () => void;
};

const MenuModal: FC<MenuModalProps> = ({
  isOpen,
  onCloseModalClick,
}: MenuModalProps) => {
  const modalTransistion = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
  });

  return (
    <>
      {isOpen && (
        <animated.div style={modalTransistion}>
          <div className={classes.modalContainer}>
            <GrClose
              className={classes.closeIcon}
              onClick={onCloseModalClick}
            />
            <ul className={classes.menuHolder}>
              <li className={classes.menuText}>
                <Link
                  to="about"
                  onClick={onCloseModalClick}
                  smooth={true}
                  duration={1000}
                >
                  Who am I
                </Link>
              </li>
              <li className={classes.menuText}>
                <Link
                  to="skills"
                  onClick={onCloseModalClick}
                  smooth={true}
                  duration={1000}
                >
                  What I do
                </Link>
              </li>
              <li className={classes.menuText}>
                <Link
                  to="projects"
                  onClick={onCloseModalClick}
                  smooth={true}
                  duration={1000}
                >
                  What I've Done
                </Link>
              </li>
              <li className={classes.menuText}>
                <Link
                  to="contact"
                  onClick={onCloseModalClick}
                  smooth={true}
                  duration={1000}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default MenuModal;
