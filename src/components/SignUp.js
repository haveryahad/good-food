import { useFormik, Formik, Form, useField } from "formik";

const SignUp = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email Address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password = "Password length should be between 8 to 20 characters";
    }

    return errors;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) =>
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
      }
    >
      {/* // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   validate,
  //   onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  // }); */}
      {(formik) => (
        <form
          className="sign-up-form"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
