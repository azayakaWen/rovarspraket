import React from "react"
import { Link } from "react-router-dom"
import "../style/About.css"

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>What is this page?</h1>

        <div className="text-container">
          <p>
            I created this page as a mini project for my portfolio, which you
            can find{" "}
            <Link to="https://curious-heliotrope-ba4e68.netlify.app/">
              here
            </Link>
            .
          </p>
          <p>
            The code is written in React.js, if you want to see more of the code
            you can click{" "}
            <Link to="https://github.com/azayakaWen/rovarspraket">here</Link> to
            go to GitHub.
          </p>
        </div>

        <h2>
          The language used on this page is called <br /> "Rövarspråket"
          (Robber's language in English):
        </h2>
        <div className="text-container">
          <p>
            To speak this language, you spell out each word and pronounce all
            vowels, "a o u (å) e i y (ä ö)", as usual but change all consonants.
          </p>
          <p>
            When you pronounce consonants, you say the letter as it sounds, add
            an "o", and then the same consonant again.
          </p>
          <p>For example:</p>
          <p>The letter "m" becomes "mom" in Rövarspråket.</p>
        </div>

        <div className="text-container">
          <p>I have known Rövarspråket since I was about 12 years old.</p>
          <p>
            A close friend taught me, and we spoke in Rövarspråket all summer.
          </p>
          <p>Rövarspråket has helped me a lot with my spelling.</p>
          <p>
            I have dyslexia, and as a child, this naturally affected my
            spelling.
          </p>
          <p>
            But because I had to spell out every word in Rövarspråket, my
            spelling gradually improved!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
