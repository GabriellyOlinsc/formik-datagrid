import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface ProgressMobileStepperProps {
  activeStep: number;
  handleNext: () => void | Promise<void>;
  handleBack: () => void;
  disabled?: boolean;
}

const ProgressMobileStepper: React.FC<ProgressMobileStepperProps> = ({ activeStep, handleNext, handleBack }) => {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{ mt:5,width:'90%', flexGrow: 1, backgroundColor:'#1a202c' }}
      nextButton={
        <Button size="medium" onClick={handleNext}  sx={{color:"#f7fafc", fontSize:18}} disabled={activeStep === 3}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button> 
      }
      backButton={
        <Button size="small" onClick={handleBack}  sx={{color:"#f7fafc", fontSize:18}} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};

export default ProgressMobileStepper;
