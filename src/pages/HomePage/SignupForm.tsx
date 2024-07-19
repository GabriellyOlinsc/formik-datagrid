import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { ProgressMobileStepper } from "../../components";

export interface Values {
  name: string;
  email: string;
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  phone: string;
  website: string;
  companyName: string;
  catchPhrase?: string;
  bs?: string;
  acceptedTerms: boolean;
}

const INITIAL_VALUES: Values = {
  name: "",
  email: "",
  city: "",
  street: "",
  suite: "",
  zipcode: "",
  phone: "",
  website: "",
  companyName: "",
  catchPhrase: "",
  bs: "",
  acceptedTerms: false,
};

const validationSchema = [
  Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Invalid Phone"),
    website: Yup.string().url("Must be an URL").required("Required"),
  }),
  Yup.object().shape({
    city: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
  }),
  Yup.object().shape({
    companyName: Yup.string()
      .oneOf(["romaguera", "deckow", "robel", "keebler", "johns", "other"], 'Invalid Company')
      .required("Required"),
    catchPhrase: Yup.string()
      .min(5, "Must be at least 5 characters")
      .required("Required"),
    bs: Yup.string().min(5, "Must be at least 5 characters").required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
  }),
];

interface SignupFormProps {
  onSubmit: (values: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
 
  const handleNext = async (formik: FormikHelpers<any>, values: any) => {
    const validFields = validateStepsFields(values)
    const isValid = await formik.validateForm();
  
    if (isValid && validFields) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetProgress = () => {
    setActiveStep(0);
  };

  const validateStepsFields = (values: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => {
    let isAllValid = true;
    const visibleFields = Object.keys(validationSchema[activeStep].fields);

    visibleFields.forEach((field: string) => {
      const fieldValue = values[field];
      if (fieldValue === '' || !fieldValue) {
        isAllValid = false;
      }
    })
    return isAllValid;
  }

  return (
    <>
      <h1>Subscribe! </h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema[activeStep]}
        onSubmit={(values, { resetForm }) => {
          resetProgress();
          onSubmit(values);
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            {activeStep === 0 && (
              <>
                <TextInput label="Name" name="name" type="text" placeholder="" />
                <TextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <TextInput label="Phone Number" name="phone" type="text" placeholder="(00) 91111-2222" />
                <TextInput label="Website" name="website" type="text" placeholder="https//formik.com" />
              </>
            )}

            {activeStep === 1 && (
              <>
                <TextInput label="City" name="city" type="text" placeholder="" />
                <TextInput label="Street Address" name="street" type="text" placeholder="" />
                <TextInput label="Zipcode" name="zipcode" type="text" placeholder="" />
              </>
            )}

            {activeStep === 2 && (
              <>
                <Select label="Company" name="companyName">
                  <option value="">Select a company</option>
                  <option value="romaguera">Romaguera Crona</option>
                  <option value="deckow">Deckow Crist</option>
                  <option value="Robel Corkery">Robel Corkery</option>
                  <option value="keebler">Keebler LLC</option>
                  <option value="johns">Johns Group</option>
                  <option value="other">Other</option>
                </Select>
                <TextInput label="Catch Phrase" name="catchPhrase" type="text" placeholder="" />
                <TextInput label="BS" name="bs" type="text" placeholder="" />
                <Checkbox name="acceptedTerms">
                  I accept the terms and conditions
                </Checkbox>
              </>
            )}

            <ProgressMobileStepper
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={() => handleNext(formik, formik.values)}
              formIsValid={formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
