import './App.css';
import { Navbar } from './Components/Navbar';
import { Page_1 } from './Components/Page_1';
import { Page_2 } from './Components/Page_2';
import { Page_3 } from './Components/Page_3';
import { Page_4 } from './Components/Page_4';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className = "container-fluid">
        <Navbar/>
        <Page_1/>
        <Page_2/>
        <Page_3/>
        <Page_4/>
        <Footer/>
    </div>
  );
}
export default App;
