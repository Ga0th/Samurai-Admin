import Layout from "./index";
const withAdminLayout = Component => {
  Component.Layout = Layout;
  return Component;
};
export default withAdminLayout;
