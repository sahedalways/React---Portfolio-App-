import React from "react";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor="checkbox">
        <input
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          checked={props.checked}
        />{" "}
        I agree!
      </label>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
