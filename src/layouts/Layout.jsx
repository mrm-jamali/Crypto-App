import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <div>
      <>
        <header className={styles.header}>
          <h1>Crypto App</h1>
          <p>
            <a href="https://github.com/mrm-jamali"> Maryam.Designer</a>
          </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>
            Developed By Maryam
            </p>
           </footer>
      </>
    </div>
  );
}

export default Layout;
