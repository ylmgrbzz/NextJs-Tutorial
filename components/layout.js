import styles from "./layout.module.css";
export default function Layout({ children }) {
  return (
    // <div className={styles.layout}>
    <div>
      {children}
      {/* <style jsx>
        {`
          .layout-page {
            background-color: lime;
          }
        `}
      </style> */}
    </div>
  );
}
