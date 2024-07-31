import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { ProgressMobileStepper } from "../../components";
import axiosInstance from "../../services/web-api";
import { UsersType } from "../../model/users.interface";
import companyData from "./company";

//todo:  tirar o variant outlined

const classes = {
 // backgroundColor: "#2d3748",
  m: '9px 0 1px 0'
};

export interface CompanyType {
  catchPhrase: string;
  bs: string;
}

export interface Values {
  name: string;
  username: string;
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
  username: "",
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
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Invalid Phone"),
  }),
  Yup.object().shape({
    city: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
    website: Yup.string().url("Must be an URL").required("Required"),
  }),
  Yup.object().shape({
    companyName: Yup.string()
      .oneOf(
        [
          "Romaguera Crona",
          "Deckow Crist",
          "Robel Corkery",
          "Keebler LLC",
          "Johns Group",
          "Other",
        ],
        "Invalid Company"
      )
      .required("Required"),
    catchPhrase: Yup.string().test(
      "catchPhrase",
      "Catch Phrase is required",
      function (value) {
        const { companyName } = this.parent;
        if (companyName === "Other") {
          return !!value && value.length >= 5;
        }
        return true;
      }
    ),
    bs: Yup.string().test("bs", "BS is required", function (value) {
      const { companyName } = this.parent;
      if (companyName === "Other") {
        return !!value && value.length >= 5;
      }
      return true;
    }),
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
  const [companyInfo, setCompanyInfo] = useState<CompanyType>({
    catchPhrase: "",
    bs: "",
  });

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const companyName = event.target.value;

    if (companyData.hasOwnProperty(companyName)) {
      const { catchPhrase, bs } =
        companyData[companyName as keyof typeof companyData];
      setCompanyInfo({ catchPhrase, bs });
    } else {
      setCompanyInfo({ catchPhrase: "", bs: "" });
    }
  };

  const handleNext = async (formik: FormikHelpers<any>, values: any) => {
    const validFields = validateStepsFields(values);
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

  const validateStepsFields = (values: {
    [x: string]: any;
    hasOwnProperty: (arg0: string) => any;
  }) => {
    let isAllValid = true;
    const visibleFields = Object.keys(validationSchema[activeStep].fields);

    if (visibleFields.includes("companyName")) {
      const companyName = values["companyName"];

      values["bs"] = companyData[companyName].bs;
      values["catchPhrase"] = companyData[companyName].catchPhrase;
    }

    visibleFields.forEach((field: string) => {
      const fieldValue = values[field];
      if (fieldValue === "" || !fieldValue) {
        isAllValid = false;
      }
    });
    return isAllValid;
  };

  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    validateStepsFields(values);
    resetProgress();
    resetForm();

    const formattedData: UsersType = {
      name: values.name,
      email: values.email,
      company: {
        bs: values.bs || "",
        catchPhrase: values.catchPhrase || "",
        name: values.companyName,
      },
      address: {
        city: values.city,
        street: values.street,
        suite: values.suite,
        zipcode: values.zipcode,
      },
      username: values.username,
      phone: values.phone,
      website: values.website,
    };
    onSubmit(formattedData);

    try {
      const response = await axiosInstance.post("/users", formattedData);

      if (response.status === 201) {
        console.log("User created successfully:", response.data);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <h1>Subscribe! </h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema[activeStep]}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {activeStep === 0 && (
              <>
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Name"
                  name="name"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Username"
                  name="username"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Phone Number"
                  name="phone"
                  type="text"
                  placeholder="(00) 91111-2222"
                />
              </>
            )}

            {activeStep === 1 && (
              <>
                <TextInput
                  sx={ classes}
                  variant="filled"
                  label="City"
                  name="city"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Street Address"
                  name="street"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Zipcode"
                  name="zipcode"
                  type="text"
                  placeholder=""
                />
                <TextInput
                  sx={classes}
                  variant="filled"
                  label="Website"
                  name="website"
                  type="text"
                  placeholder="https//formik.com"
                />
              </>
            )}

            {activeStep === 2 && (
              <>
                <Select
                  sx={classes}
                  label="Company"
                  name="companyName"
                  onClick={handleCompanyChange}
                >
                  <option value="">Select a company</option>
                  {Object.keys(companyData).map((companyName) => (
                    <option key={companyName} value={companyName}>
                      {companyName}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </Select>
                <TextInput
                  sx={classes}
                  label="Catch Phrase"
                  name="catchPhrase"
                  variant="filled"
                  type="text"
                  placeholder=""
                  value={companyInfo.catchPhrase}
                  disabled={!!companyInfo.catchPhrase}
                />
                <TextInput
                  sx={classes}
                  label="BS"
                  variant="filled"
                  name="bs"
                  type="text"
                  placeholder=""
                  value={companyInfo.bs}
                  disabled={!!companyInfo.bs}
                />
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
