import React, {ReactElement, useEffect} from 'react';
import ProblemCard from './ProblemCard';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import {Problem} from '../../models/Problem';
import styled from 'styled-components';

interface Props {
  problemsList: Array<{problem: Problem; problemStatistics: ProblemStatistics}>;
}

const StyleProblemsSection = styled.div`
  margin-top: 20px;
  max-height: 300px;
  min-width: 450px;
  overflow-y: scroll;
  scrollbar-color: lightgray white;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const ProblemsSection: React.FC<Props> = (props: Props): ReactElement => {
  const problemsList = props.problemsList;
  let myRef: HTMLDivElement | null = null;

  useEffect(() => {
    if (!myRef) return;

    myRef.scrollTo({top: myRef.scrollHeight, behavior: 'smooth'});
  }, [problemsList, myRef]);

  return (
    <StyleProblemsSection ref={(ref) => (myRef = ref)}>
      {problemsList.map((val, index) => {
        return (
          <ProblemCard
            key={index}
            problem={val.problem}
            problemStatistics={val.problemStatistics}
          ></ProblemCard>
        );
      })}
    </StyleProblemsSection>
  );
};

export default ProblemsSection;
