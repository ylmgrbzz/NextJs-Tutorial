import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <Link href="/about">Hakkında </Link>
          </li>
          <li>
            <Link href="/blog">Blog </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .header {
          background: #fff;
          border-bottom: 1px solid #ccc;

          ul {
            display: flex;

            li {
              a {
                display: flex;
                height: 60px;
                align-items: center;
                padding: 0 20px;
                color: #333;
                text-decoration: none;
              }
            }
          }
        }
      `}</style>
    </header>
  );
}
