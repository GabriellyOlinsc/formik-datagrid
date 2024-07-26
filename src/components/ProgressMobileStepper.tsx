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
  formIsValid: boolean;
}

const ProgressMobileStepper: React.FC<ProgressMobileStepperProps> = ({
  activeStep,
  handleNext,
  handleBack,
  formIsValid,
}) => {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{ mt: 5, width: '90%', flexGrow: 1, backgroundColor: '#1a202c' }}
      nextButton={
        activeStep !== 2 ?
        <Button
          size="medium"
          onClick={formIsValid ? handleNext : undefined}
          sx={{ color: '#f7fafc', fontSize: 18, pl: 3, width:20}}
          disabled={activeStep === 2}
        >
          NEXT
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button> 
        :
        <button type="submit">Submit</button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          sx={{ color: '#f7fafc', fontSize: 18, pr: 3, width:20 }}
          disabled={activeStep === 0}
        >
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
