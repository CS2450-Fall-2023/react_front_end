// Assessment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css'
import { segments } from '../list/segment';
import Layout from '../layout/Layout';

// Component for each segment
const AssessmentSegment = ({ title, description }) => (
  <div className={styles['container']}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Assessment = () => {

  return (
    <Layout>
      <div className={styles['container']}>
        <p>
          Click on the section that most matches your personality. Don't worry if you're not sure; you can click and explore around until you're certain of your choice.
        </p>

        {/* Render each segment */}
        {segments.map((segment, index) => (
          <Link key={index} to={`/assessment/${segment.title.toLowerCase().replace(/\s/g, '-')}`}>
            <AssessmentSegment title={segment.title} description={segment.description} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Assessment;

