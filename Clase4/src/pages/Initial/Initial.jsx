import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout"
import NavBar from "../../components/NavBar"
import './Initial.scss';

const Initial = () =>{
  
    return(
        <Layout>
            <NavBar><button>Carrito de compra</button></NavBar>
            <Footer/>
        </Layout>
    )
}
export default Initial;