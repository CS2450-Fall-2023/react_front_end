import React from 'react'
import styles from '../App.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Layout({ children }) {
    const location = useLocation();
    const navigation = useNavigate();
    // home
    const isRootRoute = location.pathname === '/';
    // /assessment/:segment
    const isAssessmentRoute = location.pathname.startsWith('/assessment/');
    const buttonText = isAssessmentRoute ? 'Back to Assessment' : 'Begin Assessment';
    const showButton = isAssessmentRoute || isRootRoute;

  return (
    <div className={styles['container']}>
      {!isRootRoute && (
        <p style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigation('/')}>
          <ArrowBackIcon style={{ marginRight: '8px' }} />
          Back to Home
        </p>
      )}
      <h1>Cognitive Function Assessment</h1>
      <p>
      This assessment is designed to help you determine the best way for
      you to work by asking just two questions. It provides valuable
      insights into your cognitive function and can guide you in
      optimizing your productivity and efficiency.
      </p>
      {showButton && (
      <Link to='/assessment'>
        <button className='main-btn'>{buttonText}</button>
      </Link>
      )}
      <div>
          {children}
      </div>
    </div>
  )
}

export default Layout
