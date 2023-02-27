import React from 'react'

const QuizScreen = () => {

    return (
        <section className="quiz-section">
            <h1>Coders.bringonn Test</h1>
            <div className='test-rule'>
                <p>1. Total 50 Question, Each Question has <span className='bold-test'>1 Marks</span> and no negative marking.</p>
                <p>2. If you enter any key from keyboard, site show a alert box for <span className='bold-test'>1 Warning</span>, after <span className='bold-test'>1 Warning</span> if you enter any key again the test will submit.</p>
                <p>3. Every question have own timer.</p>
                <p>4. After time up, the question tick with random answer, not correct answer 🤪.</p>
                <p>5. Please tick the below checkbox to accept all the conditions.</p>
            </div>

            <div className='form'>
                <form>
                    <div className='condition-box'>
                        <input className='checkBox' type="checkbox" />
                        <span>Please tick the box to accept all conditions.</span>
                    </div>

                    <div className='button'>
                        <button className='start-btn'>Start Test</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default QuizScreen