import React, { useState } from "react"

function translateToRovarspraket(input) {
  const consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ"
  let output = ""
  let currentWord = ""
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i)
    if (char === " ") {
      currentWord += " "
    } else if (consonants.indexOf(char) !== -1) {
      currentWord += char + "o" + char.toLowerCase()
    } else {
      currentWord += char
    }
    if (i === input.length - 1 || char === " ") {
      output += currentWord
      currentWord = ""
    }
  }
  return output.trim()
}

function Translater() {
  const [inputText, setInputText] = useState("")
  const [translatedText, setTranslatedText] = useState([])

  const handleTranslateClick = async () => {
    const translated = translateToRovarspraket(inputText)
    setTranslatedText([{ original: inputText, translated }])
    setInputText("")
  }

  return (
    <div>
      <h2>Enter text to translate</h2>
      <div className="input-container">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleTranslateClick}>Translate</button>
      </div>

      <div>
        {translatedText.length > 0 && (
          <div className="container">
            <div className="text-container">
              <h3>Original word:</h3>
              <div className="text-box">
                <p>{translatedText[0].original}</p>
              </div>
            </div>

            <div className="text-container">
              <h3>Translation:</h3>
              <div className="text-box">
                <p>{translatedText[0].translated}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Translater
