import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import Products from "../components/Products";
export default function Home() {
  
  return (
    <Layout title="Myshop | Home" enableFooter={true} isAdmin={false}>
     <Carousel/>
     <Products/>
    </Layout>
  );
}
