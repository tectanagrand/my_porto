import React from 'react';
import Card from '../components/container/Card';
import Timeline from '../components/layout/Timeline';
import { WorkingExperienceMock } from '../constants/WorkingExperienceMock';
import FlexContainer from '../components/container/FlexContainer';

const WorkingExperience = () => {
  return (
    <FlexContainer>
      <p>{`> Working Experience`}</p>
      <div className="py-3"></div>
      <Timeline>
        {WorkingExperienceMock.map((value) => {
          return (
            <Card key={value.title}>
              <div className="flex flex-col">
                <h2>{value.title}</h2>
                <p>{`${value.company} (${value.date_from} - ${value.date_to})`}</p>
                <ul className="mx-4">
                  {value.description.map((val, idx) => {
                    return <li key={idx + '-' + 'workexp'}>{val}</li>;
                  })}
                </ul>
              </div>
            </Card>
          );
        })}
      </Timeline>
    </FlexContainer>
  );
};

export default WorkingExperience;
