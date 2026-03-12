import React, { useState } from 'react';
import { Steps, Button } from 'antd';
import { 
  ArrowLeftOutlined, 
  HomeOutlined, 
  BankOutlined, 
  BorderInnerOutlined,
  AppstoreOutlined,
  StarOutlined,
  CrownOutlined,
  SketchOutlined,
  ReloadOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import {
  CalculatorWrapper,
  MainCard,
  StepContentArea,
  NavButtonGroup,
  StepContainer,
  StepHeading,
  StepSubheading,
  OptionsGrid,
  OptionCard,
  OptionIcon,
  OptionTitle,
  OptionDesc,
  ResultContainer,
  ResultEyebrow,
  ResultPrice,
  ResultNarrative,
  ResultActions
} from './Calculator.styles';

const Calculator = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [calculatorState, setCalculatorState] = useState({
    homeType: null, 
    scale: null,    
    finish: null,   
  });

  const updateState = (key, value) => {
    setCalculatorState(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleBack = () => setCurrentStep(currentStep - 1);
  
  // Resets the calculator completely
  const handleReset = () => {
    setCalculatorState({ homeType: null, scale: null, finish: null });
    setCurrentStep(0);
  };

  const isNextDisabled = () => {
    if (currentStep === 0 && !calculatorState.homeType) return true;
    if (currentStep === 1 && !calculatorState.scale) return true;
    if (currentStep === 2 && !calculatorState.finish) return true;
    return false;
  };

  // --- THE CALCULATION ENGINE ---
  const calculateEstimate = () => {
    // 1. Base prices based on scale (in INR)
    const baseCosts = {
      '1bhk': 400000,
      '2bhk': 700000,
      '3bhk': 1000000,
      '4bhk+': 1500000,
      'kitchen': 200000,
      'living': 150000,
      'bedroom': 180000
    };

    // 2. Multipliers based on home type
    const typeMultipliers = {
      'apt': 1.0,
      'villa': 1.25, // Villas usually have higher ceilings & larger areas
      'single': 1.0
    };

    // 3. Multiplier Ranges based on finish level
    const finishMultipliers = {
      'essential': { min: 0.85, max: 1.15 },
      'premium': { min: 1.40, max: 1.80 },
      'luxury': { min: 2.20, max: 3.00 }
    };

    // Safety check just in case state is missing
    if (!calculatorState.scale || !calculatorState.homeType || !calculatorState.finish) {
      return { min: '₹0', max: '₹0' };
    }

    const baseValue = baseCosts[calculatorState.scale] * typeMultipliers[calculatorState.homeType];
    const range = finishMultipliers[calculatorState.finish];

    const minEstimate = baseValue * range.min;
    const maxEstimate = baseValue * range.max;

    // Format numbers to Indian Rupees
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });

    return {
      min: formatter.format(minEstimate),
      max: formatter.format(maxEstimate)
    };
  };

  // Helper to make the narrative text sound human
  const getNarrativeText = () => {
    const scaleMap = {
      '1bhk': '1 BHK', '2bhk': '2 BHK', '3bhk': '3 BHK', '4bhk+': '4+ BHK',
      'kitchen': 'Modular Kitchen', 'living': 'Living Room', 'bedroom': 'Bedroom'
    };
    const finishMap = {
      'essential': 'Minimalist Essential', 'premium': 'Premium Custom', 'luxury': 'Bespoke Luxury'
    };
    const typeMap = {
      'apt': 'apartment', 'villa': 'villa', 'single': 'single room'
    };

    return `Based on your selections, transforming your ${scaleMap[calculatorState.scale]} ${typeMap[calculatorState.homeType]} with a ${finishMap[calculatorState.finish]} finish will fall within this estimated range.`;
  };

  // --- RENDER FUNCTIONS ---

  const renderStep1 = () => (
    <StepContainer>
      <StepHeading>What kind of space are we designing?</StepHeading>
      <StepSubheading>Select your property type to begin the estimation.</StepSubheading>
      <OptionsGrid>
        <OptionCard $active={calculatorState.homeType === 'apt'} onClick={() => updateState('homeType', 'apt')}>
          <OptionIcon $active={calculatorState.homeType === 'apt'}><HomeOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.homeType === 'apt'}>Apartment</OptionTitle>
          <OptionDesc>Standard flat within a residential complex.</OptionDesc>
        </OptionCard>
        <OptionCard $active={calculatorState.homeType === 'villa'} onClick={() => updateState('homeType', 'villa')}>
          <OptionIcon $active={calculatorState.homeType === 'villa'}><BankOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.homeType === 'villa'}>Villa / Independent</OptionTitle>
          <OptionDesc>A standalone house or multi-story villa.</OptionDesc>
        </OptionCard>
        <OptionCard $active={calculatorState.homeType === 'single'} onClick={() => updateState('homeType', 'single')}>
          <OptionIcon $active={calculatorState.homeType === 'single'}><BorderInnerOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.homeType === 'single'}>Single Room</OptionTitle>
          <OptionDesc>Just looking to renovate a specific room.</OptionDesc>
        </OptionCard>
      </OptionsGrid>
    </StepContainer>
  );

  const renderStep2 = () => {
    const isSingle = calculatorState.homeType === 'single';
    const options = isSingle ? [
      { id: 'kitchen', title: 'Modular Kitchen', desc: 'Full kitchen renovation' },
      { id: 'living', title: 'Living Room', desc: 'TV unit, seating & decor' },
      { id: 'bedroom', title: 'Bedroom', desc: 'Wardrobes & sleeping area' }
    ] : [
      { id: '1bhk', title: '1 BHK', desc: '1 Bedroom, Hall, Kitchen' },
      { id: '2bhk', title: '2 BHK', desc: '2 Bedrooms, Hall, Kitchen' },
      { id: '3bhk', title: '3 BHK', desc: '3 Bedrooms, Hall, Kitchen' },
      { id: '4bhk+', title: '4+ BHK', desc: '4 or more bedrooms' }
    ];

    return (
      <StepContainer>
        <StepHeading>What is the scale of the project?</StepHeading>
        <StepSubheading>Select the configuration of your space.</StepSubheading>
        <OptionsGrid>
          {options.map(opt => (
            <OptionCard key={opt.id} $active={calculatorState.scale === opt.id} onClick={() => updateState('scale', opt.id)}>
              <OptionIcon $active={calculatorState.scale === opt.id}><AppstoreOutlined /></OptionIcon>
              <OptionTitle $active={calculatorState.scale === opt.id}>{opt.title}</OptionTitle>
              <OptionDesc>{opt.desc}</OptionDesc>
            </OptionCard>
          ))}
        </OptionsGrid>
      </StepContainer>
    );
  };

  const renderStep3 = () => (
    <StepContainer>
      <StepHeading>What is your design aspiration?</StepHeading>
      <StepSubheading>Choose the level of finish and material quality.</StepSubheading>
      <OptionsGrid>
        <OptionCard $active={calculatorState.finish === 'essential'} onClick={() => updateState('finish', 'essential')}>
          <OptionIcon $active={calculatorState.finish === 'essential'}><StarOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.finish === 'essential'}>Minimalist Essential</OptionTitle>
          <OptionDesc>Clean, functional, and budget-friendly standard materials.</OptionDesc>
        </OptionCard>
        <OptionCard $active={calculatorState.finish === 'premium'} onClick={() => updateState('finish', 'premium')}>
          <OptionIcon $active={calculatorState.finish === 'premium'}><CrownOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.finish === 'premium'}>Premium Custom</OptionTitle>
          <OptionDesc>Bespoke cabinetry, curated finishes, and premium hardware.</OptionDesc>
        </OptionCard>
        <OptionCard $active={calculatorState.finish === 'luxury'} onClick={() => updateState('finish', 'luxury')}>
          <OptionIcon $active={calculatorState.finish === 'luxury'}><SketchOutlined /></OptionIcon>
          <OptionTitle $active={calculatorState.finish === 'luxury'}>Bespoke Luxury</OptionTitle>
          <OptionDesc>Imported materials, exclusive fixtures, and intricate detailing.</OptionDesc>
        </OptionCard>
      </OptionsGrid>
    </StepContainer>
  );

  const renderStep4 = () => {
    const { min, max } = calculateEstimate();
    
    return (
      <ResultContainer>
        <ResultEyebrow>Your Estimated Investment</ResultEyebrow>
        <ResultPrice>{min} - {max}</ResultPrice>
        <ResultNarrative>{getNarrativeText()}</ResultNarrative>
        
        <ResultActions>
          <Button size="large" icon={<ReloadOutlined />} onClick={handleReset}>
            Recalculate
          </Button>
          <Button type="primary" size="large" icon={<CalendarOutlined />}>
            Schedule Consultation
          </Button>
        </ResultActions>
      </ResultContainer>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderStep1();
      case 1: return renderStep2();
      case 2: return renderStep3();
      case 3: return renderStep4();
      default: return null;
    }
  };

  return (
    <CalculatorWrapper>
      <MainCard>
        <Steps
          current={currentStep}
          items={[
            { title: 'Space' },
            { title: 'Scale' },
            { title: 'Finish' },
            { title: 'Estimate' },
          ]}
        />

        <StepContentArea>
          {renderStepContent()}
        </StepContentArea>

        {/* Hide default navigation buttons on the final result step */}
        {currentStep < 3 && (
          <NavButtonGroup>
            {currentStep > 0 && (
              <Button size="large" icon={<ArrowLeftOutlined />} onClick={handleBack}>
                Back
              </Button>
            )}
            <Button 
              type="primary" 
              size="large" 
              onClick={handleNext}
              disabled={isNextDisabled()}
            >
              {currentStep === 2 ? 'Calculate Estimate' : 'Next'}
            </Button>
          </NavButtonGroup>
        )}
      </MainCard>
    </CalculatorWrapper>
  );
};

export default Calculator;