import "./globals.css";
import NavBar from "@/Navigation/Navbar";
import Footer from "@/Footer/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col  ">
        <NavBar/>
       {children}
       <Footer/>
        </body>
    </html>
  );
}
