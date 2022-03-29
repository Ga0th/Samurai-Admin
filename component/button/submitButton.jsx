import { Button } from "@mui/material";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const CircularProgress = styled(MuiCircularProgress)(() => ({
  marginLeft: 10
}));

const SubmitButton = ({ title, loading, variant }) =>
  <Button variant={variant} type="submit">
    {title}
    {loading && <CircularProgress color="inherit" size={20} />}
  </Button>;

export default SubmitButton;
