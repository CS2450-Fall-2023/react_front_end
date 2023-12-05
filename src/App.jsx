// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AssessmentPage from './pages/AssessmentPage';

function AnimatedSwitch() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={300}
      >
        <Routes location={location}>
          <Route path='/' element={<MainPage />} />
          <Route path='/assessment/:questionGroupId' element={<AssessmentPage />} />
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



