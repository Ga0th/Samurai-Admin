import { FormHelperText, InputLabel } from "@mui/material";
import { FormControl } from "./index";
import Rating from '@mui/material/Rating';

const RatingBox = props => {
  const {
    name,
    label,
    value,
    required,
    fullWidth,
    helperText
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      style={
        !fullWidth ? { width: "50%", paddingLeft: 5, paddingRight: 5 } : {}
      }
    >

      <Rating
        getLabelText={value => `${value} ${label}`}
        name={name}
        required={required}
        value={value}
        onChange={(event, newValue) => {
          props.onChange(newValue);
        }}
      />

      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};
export default RatingBox;
