import { HamburgerMenu, Notification, Setting2 } from "iconsax-reactjs";
import styles from "./header.module.css";
import Image from "next/image";
import { ISideBarProps } from "../SideBar/sidebar.types";

const Header = ({
  title,
  sidebarOpen,
  setSidebarOpen,
}: { title: string } & ISideBarProps) => {
  const handleOpenSidebar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <button className={styles.iconMenuButton} onClick={handleOpenSidebar}>
          <span className="material-icons">
            <HamburgerMenu />
          </span>
        </button>{" "}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.liveToggle}>
          <div className={styles.toggleSwitch}></div>
          <span>Live</span>
        </div>
        <button className={styles.iconButton}>
          <span className="material-icons">
            <Notification />
          </span>
        </button>
        <button className={styles.iconButton}>
          <span className="material-icons">
            <Setting2 />
          </span>
        </button>
        <div className={styles.profile}>
          <Image
            src="/profileImage.jpg"
            alt="Profile"
            width={32}
            height={32}
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>John Oluwaseyi</div>
            <div className={styles.sub}>Profile</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
