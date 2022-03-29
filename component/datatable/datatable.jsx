import React from 'react';
import CustomPagination from './customPagination';
import { DataGrid } from '@mui/x-data-grid';
import { apiConfig } from '../../utils/api';
import DatatabeToolbar from './datatabeToolbar';
import { useModal } from '../modal';
import { useSnackbar } from '../snackbar';
import { Breadcrumbs, Typography, Toolbar } from '@mui/material';
import Link from 'next/link';

const DataTable = props => {
  const { addRow, filterActive, Download, forceLoading, searchBar, setForceLoading, actionUrl, addbutton, columns, customActions, checkboxSelection, defaultSortModel, defaultFilterModel, title, refresh, deleteMultiple } = props;
  const modal = useModal();
  const snackbar = useSnackbar();
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRowsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [rowCount, setRowCount] = React.useState(0);
  const [sortModel, setSortModel] = React.useState(defaultSortModel);
  const [filterModel, setFilterModel] = React.useState(defaultFilterModel);
  const [isActive, setIsActive] = React.useState(true);


  const PageSizeOptions = [
    { name: '50', race: '50' },
    { name: '100', race: '100' },
  ];
  const [pageSize, setPageSize] = React.useState(PageSizeOptions[1]?.name);

  const PageSizeChange = (e) => {
    setPageSize(e);
  };
  const getRowData = async () => {
    setLoading(true);
    const filter = {
      page: page + 1,
      pageSize: pageSize,
      search: searchText,
      orderBy: sortModel[0]?.field,
      orderDirection: sortModel[0]?.sort,
    };
    await apiConfig.get(actionUrl, { params: filter })
      .then((response) => {
        if (response.status === 200) {
          if (response?.data) {
            setForceLoading(false);
            setRowsData(response.data.data);
            setRowCount(response.data.total);
          }
        }
        setLoading(false);
      }).catch((error) => {
        const { response } = error;
        setLoading(false);
        snackbar({ title: 'Error', message: response?.data?.message, severity: 'error' });
      });
  };

  React.useEffect(() => {
    getRowData();
  }, [sortModel, page, searchText, isActive, pageSize]);

  React.useEffect(() => {
    if (forceLoading === true) {
      refreshData();
    }
  }, [forceLoading]);

  const refreshData = () => {
    getRowData();
  };

  const filterActiveData = (value) => {
    setIsActive(value);
  };

  const deleteSelected = async () => {
    modal({
      title: 'confirmation',
      description: 'are you sure for delete ?',
      showConfirm: true,
      showCancel: true,
    }).then(async () => {
      await apiConfig.delete(`${actionUrl}/${selectionModel.join(',')}`).then((response) => {
        if (response.status === 200) {
          snackbar({ title: 'Update', message: 'deleted successfully', severity: 'success' });
          refreshData();
        }
      }).catch((error) => {
        const { response } = error;
        snackbar({ title: 'Error', message: response.data.message, severity: 'error' });
      });
    }).catch(() => { });
  };

  return (
    <div style={{ height: 800, width: '100%' }}>
      <Toolbar sx={{ backgroundColor: 'light' }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ marginRight: 3 }}>
          {props.title}
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Published Articles/Total Number :- {rowCount} / {rowCount}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href='/' passHref>
            <Typography color="primary.main">
              Home
            </Typography>
          </Link>
          <Typography color="inherit">
            {props.title}
          </Typography>
        </Breadcrumbs>
      </Toolbar>
      <DataGrid
        sx={{ borderTop: '3px solid #2196f3', backgroundColor: 'light' }}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={true}
        rows={rows}
        columns={columns}
        pagination
        pageSize={pageSize}
        rowCount={rowCount}
        components={{
          Toolbar: DatatabeToolbar,
          Pagination: CustomPagination
        }}
        paginationMode="server"
        onPageChange={newPage => setPage(newPage)}
        loading={loading}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        disableColumnFilter
        filterMode="server"
        filterModel={filterModel}
        onFilterModelChange={model => setFilterModel(model)}
        onSelectionModelChange={newSelectionModel => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        componentsProps={{
          toolbar: {
            title: title,
            onChangeOptions: (e) => PageSizeChange(e),
            valueOptions: pageSize,
            optionsValue: PageSizeOptions,
            addbutton: addbutton,
            value: searchText,
            refresh: refresh,
            searchBar: searchBar,
            filterActive: filterActive,
            isActive: isActive,
            deleteMultiple: deleteMultiple,
            selectionModel: selectionModel,
            customActions: customActions,
            Download: Download,
            onChange: (event) => setSearchText(event.target.value),
            clearSearch: () => setSearchText(''),
            deleteSelected: deleteSelected,
            addRow: addRow,
            refreshData: refreshData,
            filterActiveData: filterActiveData
          },
        }}
      />
    </div>
  );
};

DataTable.defaultProps = {
  actionUrl: '',
  checkboxSelection: false,
  defaultSortModel: [],
  defaultFilterModel: [],
  title: '',
  refresh: false,
  deleteMultiple: false,
  forceLoading: false,
  setForceLoading: () => { },
};

export default DataTable;
