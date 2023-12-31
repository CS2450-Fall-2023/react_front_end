// Assessment.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';
import { useLocation } from 'react-router-dom';

/**
 * @typedef {Object} QuestionResponse
 * @property {number} id - The ID of the object.
 * @property {number} group_id - The group ID of the object.
 * @property {number} next_group_id - The next group ID of the object.
 * @property {string} title - The title of the object.
 * @property {string} content - The content of the object.
 */

/**
 * Renders an assessment question.
 * @param {Object} props - The component props.
 * @param {QuestionResponse} props.question - The question object.
 * @returns {JSX.Element} The rendered component.
 */

function AssessmentQuestion({ question }) {
  return (
    <div className={styles['container']}>
      <h3>{question.title}</h3>
      <p>{question.content}</p>
      {question.next_group_id !== 0 &&
        (<Link to={`/assessment/${question.next_group_id}`}>
          <button className={styles['main-btn']}>Next Question</button>
        </Link>)
      }
    </div>
  );
}

/**
 * Renders the assessment page.
 * @param {Object} props - The component props.
 * @param {QuestionResponse[]} props.questions - The questions array.
 * @returns {JSX.Element} The rendered component.
 */
function AssessmentPage({ questions }) {
  const location = useLocation();
  // State to store the fetched data
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    const currentId = location.pathname.split('/')[2];

    // Function to fetch data from the API
    let result = questions.filter(question => question.group_id === parseInt(currentId));

    setCurrentQuestions(result);
  }, [location.pathname, questions]);

  return (
    <>
      {currentQuestions.map((question, index) => (
        <AssessmentQuestion key={index} question={question} />
      ))}
    </>
  );
};

export default AssessmentPage;

