import React from 'react';
import {
  SectionWrapper,
  Container,
  ImageCollage,
  CollageSlice,
  SliceImg,
  TextContent,
  Title,
  Description,
  HighlightText
} from './ModernHomes.styles';

const ModernHomes = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Left Side Collage */}
        <ImageCollage>
          <CollageSlice>
            <SliceImg src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=600&auto=format&fit=crop" alt="Modern kitchen" />
          </CollageSlice>
          <CollageSlice>
            <SliceImg src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop" alt="Living room accent chair" />
          </CollageSlice>
          <CollageSlice>
            <SliceImg src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop" alt="Bedroom interior" />
          </CollageSlice>
        </ImageCollage>

        {/* Right Side Text */}
        <TextContent>
          <Title>Modern Homes Deserve Better Systems.</Title>
          <Description>
            Homeowners often navigate fragmented vendors, unclear costing, inconsistent materials, 
            and unpredictable timelines. Design becomes overwhelming not because of complexity — 
            but because of poor coordination.
          </Description>
          <HighlightText>
            GoDecor was created to bring structure into residential execution.
          </HighlightText>
        </TextContent>

      </Container>
    </SectionWrapper>
  );
};

export default ModernHomes;