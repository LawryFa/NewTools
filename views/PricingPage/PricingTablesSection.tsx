import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Development Management Consultancy- DMC
          {/* <Description>
          For efficient delivery and streamlining of its services, New Tools established Development Management Consultants (DMC) as its subsidiary arm focusing on Socio-economic Consulting services while it drives ICT related services.
          </Description> */}

          </SectionTitle>
  
      <AutofitGrid>
        <PricingCard
          title="Business Services"
          description="Here's what we can do for your business"
          benefits={['Project Management, Policy and Strategy Development and Analysis, Knowledge Management – Monitoring, Evaluation and Documentation, Applied Research,  Leadership Development, Change Management, Investment and Business Development,  amongst others', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Economics"
          description="New Tools's DMC arm stretches beyond business"
          benefits={['Participatory Development ', ' Economic and Statistical Analysis', 'Organizational Development', 'Resource Mobilisation']}
          
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Leadership and Stretegy"
          description="DMC has services that support your business deicion-making capabilities"
          benefits={[
            'Leadership Development,  Investment and ',
            'Change Management,',
            'Investment',
            'Business Development',
            
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
