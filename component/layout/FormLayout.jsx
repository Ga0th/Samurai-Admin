import {
  Card,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Icon,
  Paper
} from "@mui/material";
import { useRouter } from "next/router";

const FormLayout = props => {
  const { title, xs, sm, md, lg, xl, marginTop, goBack, children } = props;
  const router = useRouter();

  const goToBack = () => {
    router.push(props.goBack);
  };

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: marginTop }}
      >
        <CssBaseline />
        <Grid
          item
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          component={Paper}
          elevation={6}
          square
        >
          <Card>
            <CardHeader
              titleTypographyProps={{ variant: "h5", align: "center" }}
              title={title}
              action={props.action}
              avatar={
                goBack && <Icon onClick={() => goToBack()}>arrow_back</Icon>
              }
            />
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

FormLayout.defaultProps = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  goBack: null
};

export default FormLayout;
