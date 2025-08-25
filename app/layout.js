import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Provider from "./(Dark Mode Intialization)/Provider";

export const metadata = {
  title: "AIM - MADE MACHINES HUMANS CURE!!!",
  description: "AIM Is A ML-Powered APP That Predicts That The Person Is Suffering From Diabetes Or Not!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950 overflow-x-hidden transition-colors">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}