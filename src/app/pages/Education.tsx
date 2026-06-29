import React from 'react';
import Timeline from '../components/layout/Timeline';
import Card from '../components/container/Card';
import FlexContainer from '../components/container/FlexContainer';

const Education = () => {
  return (
    <FlexContainer>
      <p>{`> Education`}</p>
      <div className="py-3"></div>
      <Timeline>
        <Card>
          <div className="flex flex-col">
            <h2>Bachelor Degree</h2>
            <p>Computer Science (2018 - 2022)</p>
            <p>Institut Pertanian Bogor</p>
            <p>GPA : 3.67/4.00</p>
          </div>
        </Card>
      </Timeline>
    </FlexContainer>
  );
};

export default Education;
