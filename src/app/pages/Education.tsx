import React from 'react';
import Timeline from '../components/layout/Timeline';
import Card from '../components/container/Card';

const Education = () => {
  return (
    <div className="flex flex-col gap-0 mx-4">
      <p>{`> Education`}</p>
      <Timeline>
        <Card>
          <div className="flex flex-col">
            <h1>Bachelor Degree</h1>
            <p>Computer Science (2018 - 2022)</p>
            <p>Institut Pertanian Bogor</p>
            <p>GPA : 3.67/4.00</p>
          </div>
        </Card>
      </Timeline>
    </div>
  );
};

export default Education;
