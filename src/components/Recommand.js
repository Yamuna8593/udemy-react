import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommand(){
    return(
        <div class="recommended">
        <h1>Recommended for you</h1>
        <p>pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={c1} alt=""></img>
                <h3>2023 Python Data Visualisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c2} alt=""></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c3} alt=""></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c4} alt=""></img>
                <h3>Basic to Advanced Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
        <div class="topics"></div>
        <h1>Topics recommended for you</h1>
        <div class="topics__container">
            <p>Website</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>AWS</p>
            <p>Mongo DB</p>
            <p>Azure</p>
            <p>GitHub</p>
            <p>Docker</p>
            <p>React Js</p>
        </div>

    </div>
    )
}

export default Recommand