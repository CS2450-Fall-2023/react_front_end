import React from 'react'
import styles from '../App.module.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <div className={styles['container']}>
        <h1>Cognitive Function Assessment</h1>
        <p>
          This assessment is designed to help you determine the best way for
          you to work by asking just two questions. It provides valuable
          insights into your cognitive function and can guide you in
          optimizing your productivity and efficiency.
        </p>

        <Link to='/assessment/1'>
          <button className={styles['main-btn']}>Start Assessment</button>
        </Link>
      </div>
    </>
  )
}

export default MainPage
