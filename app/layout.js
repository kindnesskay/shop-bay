import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Fruits",
  description: "Fruits for sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "rebeccapurple",
            }}
          >
            <Link
              href="/"
              style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}
            >
              Fruits
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
