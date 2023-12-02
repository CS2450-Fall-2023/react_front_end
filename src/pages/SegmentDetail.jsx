// SegmentDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { subSegments } from '../list/subSegments';
import Layout from '../layout/Layout';

const SubSegment = ({ title, content }) => (
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const SegmentDetail = () => {
  const { segment, subSegment } = useParams(); // Get the segment and sub-segment titles from the URL


  return (
    <Layout>
      <h2>{segment} - {subSegment}</h2>

      {/* Render each sub-sub-segment */}
      {subSegments[segment].map((subSubSegment, index) => (
        <SubSegment key={index} {...subSubSegment} />
      ))}
    </Layout>
  );
};

export default SegmentDetail;
