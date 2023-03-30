export default function Layout({ children }) {
  return (
    <div className="layout-page">
      {children}
      <style jsx>
        {`
          .layout-page {
            background-color: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
}
