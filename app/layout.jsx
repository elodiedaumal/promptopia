import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AIprompts",
};

const RootLayout = ({ children }) => {
  return (
    <html len="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
