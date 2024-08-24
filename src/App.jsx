
import './App.css'
import Navbar from './components/Navbar'
import StoreCard from './components/storecard'
import Deal from './components/deal'
import ProductGrid from './components/products'
import Promo from './components/promo'
import Footer from './components/footer'
function App() {

  return (
    <>
        <div className="bg-gray-100 min-h-screen p-6">
          <Navbar></Navbar>
       <StoreCard />
       <Deal></Deal>
       <ProductGrid></ProductGrid>
       <Promo></Promo>
       <Footer></Footer>
    </div>
    </>
  )
}

export default App
