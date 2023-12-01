// Assessment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css'

// Component for each segment
const AssessmentSegment = ({ title, description }) => (
  <div className={styles['container']}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Assessment = () => {
  const segments = [
    {
      title: 'Plan-the-Course',
      theme: 'Having a Course of Action to Follow',
      description:
        "People of this style focus on knowing what to do and keeping themselves, the group, or the project on track. They prefer to enter a situation having an idea of what is to happen. They identify a process to accomplish a goal and have a somewhat contained tension as they work to create and monitor a plan. The aim is not the plan itself, but to use it as a guide to move things along toward the goal. Their informed and deliberate decisions are based on analyzing, outlining, conceptualizing or foreseeing what needs to be done.",
    },
    {
      title: 'Behind-the-Scenes',
      theme: 'Getting the Best Result Possible',
      description:
        "People of this style focus on understanding and working with the process to create a positive outcome. They see value in many contributions and consult outside inputs to make an informed decision. They aim to integrate various information sources and accommodate differing points of view. They approach others with a quiet, calm style that may not show their strong convictions. Producing, sustaining, defining, and clarifying are all ways they support a group's process. They typically have more patience than most with the time it takes to gain support through consensus for a project or to refine the result.",
    },
    {
      title: 'In-Charge',
      theme: 'Getting Things Accomplished Through People',
      description:
        "People of this style focus on understanding and working with the process to create a positive outcome. They see value in many contributions and consult outside inputs to make an informed decision. They aim to integrate various information sources and accommodate differing points of view. They approach others with a quiet, calm style that may not show their strong convictions. Producing, sustaining, defining, and clarifying are all ways they support a group's process. They typically have more patience than most with the time it takes to gain support through consensus for a project or to refine the result.",
    },
    {
      title: 'Get-Things-Going',
      theme: 'Persuading and Invonving Others',
      description:
        "They thrive in facilitator or catalyst roles and aim to inspire others to move to action, facilitating the process. Their focus is on interaction, often with an expressive style. They Get-Things-Going with upbeat energy, enthusiasm, or excitement, which can be contagious. Exploring options and possibilities, making preparations, discovering new ideas, and sharing insights are all ways they get people moving along. They want decisions to be participative and enthusiastic, with everyone involved and engaged.",
    },
  ];

  return (
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
  );
};

export default Assessment;

