import React from 'react';
import {
  SectionWrapper,
  Container,
  Grid,
  TextSection,
  Title,
  Subtitle,
  BeigeCard,
  BlueCard,
  WideImageCard,
  SquareImageCard,
  CardTitle,
  CardText,
  CardImage,
  Overlay
} from './GoDecorDifference.styles';

const GoDecorDifference = () => {
  return (
    <SectionWrapper>
      <Container>
        <Grid>
          <TextSection>
            <Title>The GoDecor<br />Difference</Title>
            <Subtitle>
              A design approach built on clarity, quality, and thoughtful execution.
            </Subtitle>
          </TextSection>

          <BeigeCard>
            <CardTitle $dark>Thoughtful Design</CardTitle>
            <CardText $dark>
              Every space is designed with a balance of aesthetics, functionality, and everyday usability—tailored to how you live and use it.
            </CardText>
          </BeigeCard>

          <BlueCard>
            <CardTitle $light>Timely Delivery</CardTitle>
            <CardText $light>
              Structured timelines with consistent execution.
            </CardText>
          </BlueCard>

          <WideImageCard>
            <CardImage 
              src="difference-image.jpg" 
              alt="Modern minimalist interior" 
            />
            <Overlay />
            <CardTitle $light>End-to-End Execution</CardTitle>
            <CardText $light>
              From concept to completion, we manage every stage of the project with precision, ensuring a seamless and stress-free experience.
            </CardText>
          </WideImageCard>

          <SquareImageCard>
            <CardImage 
              src="premium-materials.jpg" 
              alt="Premium interior materials and textures" 
            />
            <Overlay />
            <CardTitle $light>Premium Materials</CardTitle>
            <CardText $light>
              Carefully selected for durability and lasting appeal.
            </CardText>
          </SquareImageCard>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default GoDecorDifference;