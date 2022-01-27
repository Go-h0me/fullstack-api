import { useRef, useState } from 'react'

function HomePage() {
    const [feedbackItems, setFeedbackItems] = useState([]);


    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();


        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;

        const reqBody = { email: enteredEmail, feedback: enteredFeedback }

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => console.log(data)); // {email: "test@test.com",text:"Some feedback"}
    }

    function loadFeedbackHandler() {
        fetch('/api/feedback').then((response) => response.json())
            .then((data) => { setFeedbackItems(data.feedback) }); // {email: "test@test.com",text:"Some feedback"}
    }

    return (
        <div>
            <h1>The Home Page</h1>
            <form onSubmit={submitFormHandler}>
                <div>

                    <label html="email">Your Email Address</label>
                    <input type="email" id="email" ref={emailInputRef} />
                </div>
                <div>

                    <label html="feedback">Your Feedback</label>
                    <textarea id="feedback" rows="5" ref={feedbackInputRef} ></textarea>
                </div>
                <button>Send Feedback</button>
                <hr />
                <button onClick={loadFeedbackHandler}>Load Feedback</button>
                <ul>
                    {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
                </ul>
            </form>
        </div>
    )
}

export default HomePage