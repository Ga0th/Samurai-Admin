import { FormHelperText, Icon, InputAdornment, TextField } from "@mui/material";
import { FormControl } from "./index";

const TextBox = props => {
  const {
    name,
    label,
    variant,
    type,
    icon,
    value,
    required,
    multiline,
    inputAdornmentPosition,
    fullWidth,
    helperText,
    disabled,
    rows
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
    >
      <TextField
        error={helperText ? true : false}
        variant={variant}
        name={name}
        label={label}
        type={type}
        rows={rows}
        multiline={multiline}
        required={required}
        disabled={disabled}
        autoComplete={false}
        value={value}
        onChange={e => props.onChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position={inputAdornmentPosition}>
              <Icon>
                {icon}
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

export default TextBox;
