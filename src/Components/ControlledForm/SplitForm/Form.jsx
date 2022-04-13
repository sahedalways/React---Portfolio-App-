import React from "react";
import InputText from "./InputText";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import Style from "./form.module.css";

const Form = ({
  values,
  handleChange,
  handleAgreement,
  agreement,
  onHandleSubmit,
  errors,
}) => {
  return (
    <form onSubmit={onHandleSubmit} className={Style.formBody}>
      <div className="form-group ">
        <InputText
          label="Name :"
          name="name"
          type="text"
          errors={errors.name}
          placeholder="Enter your name..."
          value={values.name}
          onChange={handleChange}
        />
        <InputText
          label="Email :"
          name="email"
          type="email"
          errors={errors.email}
          placeholder="Enter your email..."
          value={values.email}
          onChange={handleChange}
        />
        <InputText
          label="Password :"
          name="password"
          type="password"
          errors={errors.password}
          placeholder="Enter your password..."
          value={values.password}
          onChange={handleChange}
        />
        <InputText
          label="Birth date :"
          name="birthdate"
          type="date"
          errors={errors.birthDate}
          value={values.birthday}
          onChange={handleChange}
        />

        <div className="form-group ">
          <label style={{ marginRight: "15px" }}>
            <input
              style={{ marginRight: "6px" }}
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              style={{ marginRight: "6px" }}
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              style={{ marginRight: "6px" }}
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
            Other
          </label>
          {errors.gender && (
            <div className="invalid-feedback">{errors.gender}</div>
          )}{" "}
          :
        </div>
      </div>

      <Checkbox
        type="checkbox"
        name="checkbox"
        value={values.checkbox}
        onChange={handleAgreement}
        checked={agreement}
      />

      <button
        className="btn btn-primary mt-3"
        type="submit"
        disabled={!agreement}
      >
        Submit Now
      </button>
    </form>
  );
};

// eslint-disable-next-line react/no-typos
Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
};

export default Form;
