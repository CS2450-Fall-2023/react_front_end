// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Assessment from './Assessment';
import SegmentDetail from './SegmentDetail';
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <>
        <div className={styles['container']}>
          <h1>Cognitive Function Assessment</h1>
          <p>
            This assessment is designed to help you determine the best way for
            you to work by asking just two questions. It provides valuable
            insights into your cognitive function and can guide you in
            optimizing your productivity and efficiency.
          </p>
          <Link to='/assessment'>
            <button className='main-btn'>Begin Assessment</button>
          </Link>
        </div>

        <Routes>
          <Route path='/assessment' element={<Assessment />} />
          <Route path='/assessment/:segment' element={<SegmentDetail />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;



