import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Search from "./components/Search"
import Recommand from "./components/Recommand"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App()
{
  return(
  <div>
<Navbar></Navbar>
<Category></Category>
<Search></Search>
<Recommand></Recommand>
<Popular></Popular>
<Footer></Footer>
</div>
  )
}
export default App