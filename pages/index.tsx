import type { NextPage } from 'next';
import React from 'react'

const HomePage: NextPage = () => {
  
  const emailInputRef = React.useRef<HTMLInputElement | null>(null);
  const feedbackInputRef = React.useRef<HTMLTextAreaElement | null>(null);

  const [feedbackItems, setFeedbackItems] = React.useState([]);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value || "";
    const enteredFeedback = feedbackInputRef.current?.value || "";

    const reqBody = {email: enteredEmail, text: enteredFeedback};
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(data => console.log(data));
  }

  const loadFeedbackHandler = () => {
    fetch('/api/feedback').then(response => response.json()).then(data => {
      setFeedbackItems(data.feedback);
    });
  }

  return <div>
    <h1>The Home Page</h1>
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea name="feedback" id="feedback" rows={5} ref={feedbackInputRef}></textarea>
      </div>
      <button type='submit'>Send Feedback</button>
    </form>
    <hr />
    <button onClick={loadFeedbackHandler}>load Feedback</button>
    <ul>
      {feedbackItems.map((item: any) => <li key={item.id}>{item.text}</li>)}
    </ul>
  </div>
}

export default HomePage
