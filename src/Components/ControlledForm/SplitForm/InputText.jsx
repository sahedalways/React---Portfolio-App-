import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  return (
    <div className="form-group ">
      <label htmlFor="props.name">{props.label}</label>
      <input
        className={
          props.errors ? "form-control is-invalid mb-3" : "form-control mb-3"
        }
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.name}
      />
      {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

// // eslint-disable-next-line react/no-typos
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// eslint-disable-next-line react/no-typos
InputText.defaultprops = {
  type: "text",
  label: "",
  placeholder: "",
};

export default InputText;
