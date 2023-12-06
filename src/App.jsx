// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AssessmentPage from './pages/AssessmentPage';
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './pages/Form';

function AnimatedSwitch() {
  let location = useLocation();

  let [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:4000/questions`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.log('Error fetching data: Reverting to hardcoded JSON');

      const response = await fetch(`../questions.json`);
      let result = await response.json();

      return result;
    }
  };

  useEffect(() => {
    fetchQuestions().then(result => setQuestions(result));
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={300}
      >
        <Routes location={location}>
          <Route path='/' element={<MainPage />} />
          <Route path='/assessment/:questionGroupId' element={<AssessmentPage questions={questions} />} />
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}


function App() {

  return (
    <Router>
      <AnimatedSwitch />
    </Router>
  );
}

export default App;



