import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "./Select";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

interface SignupFormProps {
  onSubmit: (values: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            acceptedTerms: false, 
            jobType: "" 
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
              .required("Required")
          })}
          onSubmit={(values, { resetForm }: FormikHelpers<any>) => {
            onSubmit(values);
            resetForm();
          }}
        >
          <Form>
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
  
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  };
  
  export default SignupForm;