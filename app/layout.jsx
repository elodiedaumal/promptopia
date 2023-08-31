import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AIprompts",
};

const RootLayout = ({ children }) => {
  return (
    <html len="en">
      <body>
        <div className="name">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
