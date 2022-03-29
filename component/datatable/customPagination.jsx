import { useGridApiContext, useGridState } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);
  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      defaultPage={5}
      siblingCount={0}
      boundaryCount={1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

export default CustomPagination;
