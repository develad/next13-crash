import Header from "./components/Header";
import "./globals.css";
import { Poppins, Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Agency Media",
  description: "Web development tutorials and courses",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={firaCode.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
