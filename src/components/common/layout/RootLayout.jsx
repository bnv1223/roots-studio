import { useEffect, useRef, useState } from "react";
import allNavData from "../../../data/navData.json";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
//import Switcher from "../Switcher";
import ScrollTop from "../ScrollTop";
import Header1 from "@/components/header/Header1";
import Footer1 from "@/components/footer/Footer1";
/* import Header2 from "@/components/header/Header2";
import Header3 from "@/components/header/Header3";
import Header4 from "@/components/header/Header4";
import Header5 from "@/components/header/Header5";
import Footer2 from "@/components/footer/Footer2";
import Footer3 from "@/components/footer/Footer3";
import Footer4 from "@/components/footer/Footer4";
import Footer5 from "@/components/footer/Footer5";
 */


const HeaderContent = ({ header, navData }) => {
  if (header == "header1") {
    return <Header1 navData={navData} />;
  } 
};
const FooterContent = ({ footer }) => {
  if (footer == "footer1") {
    return <Footer1 />;
  } 
};

export default function RootLayout({
  children,
  header = "",
  footer = "",
  defaultMode = "",
}) {
  const [mode, setMode] = useState(defaultMode);
  const [navData, setNavData] = useState({});

  const cursor1 = useRef();
  const cursor2 = useRef();
  useEffect(() => {
    setNavData(allNavData);
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);
  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        {/* <Switcher
          setMode={setMode}
          mode={mode}
          cursor1={cursor1}
          cursor2={cursor2}
        /> */}
        <ScrollTop />
        <HeaderContent header={header} navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterContent footer={footer} />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
