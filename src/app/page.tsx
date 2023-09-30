import Child from "./components/Child";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Parent from "./components/Parent";
import Product from "./components/Products/Product";
import Table from "./components/Table/Table";
import Hero from "./components/UI/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Table/>
      <Product/>  
      <Parent/>
      <Footer/>
    </main>
  )
}
