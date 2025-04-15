import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Alert from "./Components/Alert/Alert.jsx";
import SectionOne from "./Components/SectionOne/SectionOne.jsx";
import SectionTwo from "./Components/SectionTwo/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree/SectionThree.jsx";
import SectionFour from "./Components/SectionFour/SectionFour.jsx";
import SectionFive from "./Components/SectionFive/SectionFive.jsx";
import SectionSix from "./Components/SectionSix/SectionSix.jsx";

import "./assets/css/styles.css";


function App() {
  // const [count, setCount] = useState(0)??????

  return (
    <>
      <Header />
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default App;
