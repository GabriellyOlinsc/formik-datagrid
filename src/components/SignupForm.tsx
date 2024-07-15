import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select from "./Select";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";


// And now we can use these
export default function SignupForm(){
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            acceptedTerms: false, // added for our checkbox
            jobType: "" // added for our select
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
              // specify the set of valid values for job type
              // @see http://bit.ly/yup-mixed-oneOf
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type"
              )
              .required("Required")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
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
  