import "./App.css"
import Header from "./components/Header"
import React, { useState } from "react"
import AnswersList from "./components/AnswersList"

export default function App() {
  const [bestFeature, setBestFeature] = useState([])
  const [worstFeature, setWorstFeature] = useState([])
  const [duckConsistency, setDuckConsistency] = useState("")
  const [duckLogo, setDuckLogo] = useState("")
  const [duckColor, setDuckColor] = useState("")
  const [spendTime, setSpendTime] = useState([])
  const [review, setReview] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  
  const [answers, setAnswers] = useState([])

  function handleCheckboxChange(event, stateSetter) {
    const { value, checked } = event.target
    stateSetter((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    })
  }

  const handleRadioChange = (event, stateSetter) => {
    stateSetter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newAnswer = {
      username,
      bestFeature: bestFeature,
      worstFeature: worstFeature,
      consistency: duckConsistency,
      logo: duckLogo,
      colour: duckColor,
      timeSpent: spendTime,
      review
    }

    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);

    resetForm();
  };

  const resetForm = () => {
    setBestFeature([])
    setWorstFeature([])
    setDuckConsistency("")
    setDuckLogo("")
    setDuckColor("")
    setSpendTime([])
    setReview("")
    setUsername("")
    setEmail("")
  };

  return (
    <div className="app">
      <Header />
      <main className="survey">
        <section className="survey__list">
          <h2>Answers list</h2>
          <AnswersList answersList={answers} />
        </section>
        <section className="survey__form">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about the rubber duck?</h2>
            <div className="form__group">
              <h3>What would you say are the best features of your rubber duck?</h3>
              {["yellow", "squeaks", "logo", "big"].map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    value={feature}
                    onChange={(event) => handleCheckboxChange(event, setBestFeature)}
                  />
                  {feature.charAt(0).toUpperCase() + feature.slice(1)}
                </label>
              ))}
            </div>
            <div className="form__group">
              <h3>What would you say are the worst bits of your rubber duck?</h3>
              {["yellow", "squeaks", "logo", "big"].map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    value={feature}
                    onChange={(event) => handleCheckboxChange(event, setWorstFeature)}
                  />
                  {feature.charAt(0).toUpperCase() + feature.slice(1)}
                </label>
              ))}
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck consistency?</h3>
              {["1", "2", "3", "4"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="duckConsistencyRating"
                    value={value}
                    checked={duckConsistency === value}
                    onChange={(event) => handleRadioChange(event, setDuckConsistency)}
                  />
                  {value}
                </label>
              ))}
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck logo?</h3>
              {["1", "2", "3", "4"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="duckLogoRating"
                    value={value}
                    checked={duckLogo === value}
                    onChange={(event) => handleRadioChange(event, setDuckLogo)}
                  />
                  {value}
                </label>
              ))}
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck color?</h3>
              {["1", "2", "3", "4"].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="duckColorRating"
                    value={value}
                    checked={duckColor === value}
                    onChange={(event) => handleRadioChange(event, setDuckColor)}
                  />
                  {value}
                </label>
              ))}
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck?</h3>
              {["swimming", "bathing", "chatting", "dontLike"].map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    onChange={(event) => handleCheckboxChange(event, setSpendTime)}
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1).replace("dontLike", "I don't like to spend time with it")}
                </label>
              ))}
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                value={review}
                onChange={(event) => setReview(event.target.value)}
              ></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
          </form>
        </section>
      </main>
    </div>
  )
}
