import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import style from "./Auth.module.css";
import Input from "./../../components/UI/Input/Input";
import { connect } from "react-redux";
import { auth } from "./../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "The minimum letters 5")
    .max(50, "Too Long!")
    .required("Required"),
});

class Auth extends Component {
  state = {};
  render() {
    let auth = (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              this.props.onAuth(values.email, values.password);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <span className={style.Error}>
                {errors.email && touched.email && errors.email}
              </span>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />
              <span className={style.Error}>
                {errors.password && touched.password && errors.password}
              </span>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
              />
              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      );
    if (this.props.loading) {
      auth = <Spinner/>
    }
    return (
      <React.Fragment>
        <div className={style.Auth}>
          <h1>SignUp</h1>
    <div>{this.props.error}</div>
          {auth}
        </div>
       
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};
const mapStateToProps = (state) => {
    return{
        loading: state.auth.loading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
