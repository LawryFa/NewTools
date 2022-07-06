import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>
          For efficient delivery and streamlining of its services, New Tools established Development Management Consultants (DMC) as its subsidiary arm focusing on<br/> Socio-economic Consulting services while it drives ICT related services.</OverTitle>
          <SectionTitle>.Development Management Consultants (DMC)
</SectionTitle>
          <Description>
          DMC offers a wide array of services, including;</Description>
          <ButtonGroup>
            <OutlinedButton>
              Project Management Knowledge Management – Monitoring, Evaluation and Documentation, Applied Research, Participatory Development, Economic and Statistical Analysis, Organizational Development, Resource Mobilisation, Leadership Development, Change Management, Investment and Business Development <span>&rarr;</span>
             
              Policy and Strategy Development and Analysis <span>&rarr;</span>
             
              Knowledge Management – Monitoring, Evaluation and Documentation <span>&rarr;</span>
             
              Applied Research  
              </OutlinedButton> <span>&rarr;</span>
            

              </ButtonGroup>

              <ButtonGroup>
            <OutlinedButton>
              Project Management Knowledge Management – Monitoring, Evaluation and Documentation, Applied Research, Participatory Development, Economic and Statistical Analysis, Organizational Development, Resource Mobilisation, Leadership Development, Change Management, Investment and Business Development <span>&rarr;</span>
             
              Policy and Strategy Development and Analysis <span>&rarr;</span>
             
              Knowledge Management – Monitoring, Evaluation and Documentation <span>&rarr;</span>
             
              Applied Research  
              </OutlinedButton> <span>&rarr;</span>
            

              </ButtonGroup>        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
