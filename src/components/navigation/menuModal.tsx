import { FC } from "react";
import classes from "../../styles/navigation.module.css";
import { GrClose } from "react-icons/gr";
import { animated, useSpring } from "react-spring";

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
              <li className={classes.menuText}>Who am I?</li>
              <li className={classes.menuText}>What I do</li>
              <li className={classes.menuText}>What I've Done</li>
              <li className={classes.menuText}>Get in touch</li>
            </ul>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default MenuModal;
