import { Button } from "@mui/material";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const CircularProgress = styled(MuiCircularProgress)(() => ({
  marginLeft: 10
}));

const CustomeButton = ({ title, loading, variant, onClick }) =>
  <Button variant={variant} type="button" onClick={onClick}>
    {title}
    {loading && <CircularProgress color="inherit" size={20} />}
  </Button>;

export default CustomeButton;
