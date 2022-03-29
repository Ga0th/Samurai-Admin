import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { FormControl } from "./index";
const SelectBox = props => {
  const {
    name,
    label,
    value,
    required,
    options,
    fullWidth,
    helperText
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      style={
        !fullWidth ? { width: "50%", paddingLeft: 5, paddingRight: 5, marginTop: 8, height: '40px' } : {}
      }
    >
      <InputLabel>
        {label}
      </InputLabel>

      <Select
        name={name}
        native
        required={required}
        value={value}
        onChange={e => props.onChange(e)}
        inputProps={{
          name: name
        }}
      >
        {options &&
          options.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
      </Select>

      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};
export default SelectBox;
