import { FormHelperText, Icon, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FormControl } from "./index";

const PasswordBox = props => {
  const [showPassword, setShowPassword] = React.useState("");

  const {
    name,
    label,
    value,
    required,
    inputAdornmentPosition,
    fullWidth,
    helperText,
    disabled
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
    >
      <TextField
        error={helperText ? true : false}
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        required={required}
        value={value}
        disabled={disabled}
        autoComplete={false}
        onChange={e => props.onChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position={inputAdornmentPosition}>
              <Icon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "visibility" : "visibility_off"}
              </Icon>
            </InputAdornment>
          )
        }}
      />

      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};

export default PasswordBox;
