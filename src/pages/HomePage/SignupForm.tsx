import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { ProgressMobileStepper } from "../../components";

export interface Values {
  activeStep: number;
  name: string;
  email: string;
  street: string;
  suite: string;
  zipode: string;
  phone: string;
  website: string;
  companyName: string;
  catchPhrase?: string;
  bs?: string;
}

const validationSchema = Yup.object().shape({});

interface SignupFormProps {
  onSubmit: (values: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async (formik: FormikHelpers<any>) => {
    const isValid = await formik.validateForm();
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetProgress = () => {
    setActiveStep(0);
  };

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }: FormikHelpers<any>) => {
          resetProgress();
          onSubmit(values);
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            {activeStep === 0 && (
              <>
                <TextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
              </>
            )}

            {activeStep === 1 && (<>
              <Select label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </Select>
              <Checkbox name="acceptedTerms">
                I accept the terms and conditions
              </Checkbox>
            </>)}

            <ProgressMobileStepper
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={() => handleNext(formik)}
              disabled={!formik.isValid } 
            />
            {activeStep === 3 && <button type="submit">Submit</button>}
          </Form>)}
      </Formik>

    </>
  );
};

export default SignupForm;
