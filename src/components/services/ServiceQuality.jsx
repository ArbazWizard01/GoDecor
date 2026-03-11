import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  TopContainer,
  MainTitle,
  MainDesc,
  HighlightText,
  BottomContainer,
  LeftColumn,
  SideTitle,
  SideDesc,
  RightColumn,
  ListItem,
  IconWrapper,
  ItemText
} from './ServiceQuality.styles';

const qualityPoints = [
  "Verified supplier partnerships",
  "Defined material specifications",
  "Standardized quality checklists",
  "Structured change documentation",
  "Transparent milestone reporting"
];

const ServiceQuality = () => {
  return (
    <SectionWrapper>
      
      {/* Top Half: Built for Growth */}
      <TopContainer>
        <MainTitle>Built for Growth Without Compromise.</MainTitle>
        <MainDesc>
          Our service structure is designed around repeatable planning protocols, standardized material 
          catalogs, and coordinated installation frameworks — enabling consistent delivery across 
          projects and cities.
        </MainDesc>
        <HighlightText>
          This ensures scalability without sacrificing quality.
        </HighlightText>
      </TopContainer>

      {/* Bottom Half: Documented Quality */}
      <BottomContainer>
        <LeftColumn>
          <SideTitle>Quality That's Documented,<br/>Not Assumed.</SideTitle>
          <SideDesc>
            We operate with defined guidelines and verified material grades to 
            protect both homeowners and execution teams.
          </SideDesc>
        </LeftColumn>

        <RightColumn>
          {qualityPoints.map((point, index) => (
            <ListItem key={index}>
              <IconWrapper>
                <CheckCircleOutlined />
              </IconWrapper>
              <ItemText>{point}</ItemText>
            </ListItem>
          ))}
        </RightColumn>
      </BottomContainer>

    </SectionWrapper>
  );
};

export default ServiceQuality;