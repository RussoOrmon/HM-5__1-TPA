import React from "react";

const FormInput = (props) => {
  const { id, labelName, inputType, placeholder, ...rest} = props;

  return (
    <div action="" method="POST">
      <div>
        <label htmlFor={id}>
          {labelName}
          <input
            {...rest}
            type={inputType}
            id={id}
            placeholder={placeholder || '...'}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default FormInput;
