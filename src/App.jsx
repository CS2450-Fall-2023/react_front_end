// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Assessment from './pages/Assessment';
import SegmentDetail from './pages/SegmentDetail';
import Layout from './layout/Layout';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
          <Route path='/' element={<Layout />} />
          <Route path='/assessment' element={<Assessment />} />
          <Route path='/assessment/:segment' element={<SegmentDetail />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}


function App() {

  return (
    <Router>
      <AnimatedSwitch/>
    </Router>
  );
}

export default App;



