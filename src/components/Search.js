import sale from "../assets/images/sale image.jpeg"

function Search(){
    return(
        <div class="sale-image">
        <img src={sale} alt="sale"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale!..24 hours Offer</h2>
            <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
        )
}

export default Search