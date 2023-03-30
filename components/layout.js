export default function Layout({ children }) {
  return (
    <div className="layout-page">
      {children}
      <style jsx>
        {`
          .layout-page {
            background-color: #f0f0f0;
          }
        `}
      </style>
    </div>
  );
}
