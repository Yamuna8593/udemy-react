function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#020a18"}}></i>
            <input type="text" placeholder="Search for anything here business, tech, art..."></input>
        </div>
        <div class="navbar__s3">
            <p>Courses</p>
            
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>

            <i class="fa-solid fa-cart-shopping" style={{color: "#00060f"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#020c1d"}}></i>
            <i class="fa-solid fa-user" style={{color: "#020812"}}></i>
        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    )

}
export default Navbar