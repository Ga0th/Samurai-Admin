import React from 'react';
import Head from 'next/head';
import { withAdminLayout } from 'component/layout';
import { DataTable } from 'component/datatable/index';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Icon, Tooltip, Button } from '@mui/material';
import { useRouter } from 'next/router';

const BlogsIndex = () => {
  const router = useRouter();
  const title = 'Articles';
  const formUrl = '/articles/form';
  const columns = [
    { field: 'id', headerName: 'Id', width: 85 },
    {
      field: 'title', headerName: 'Article Title', width: 250, renderCell: ({ row }) => {
        return (
          <Button color="primary" onClick={() => router.push(`${formUrl}/${row.id}`)} >
            {row?.title}
          </Button>
        );
      }
    },
    // { field: 'summary', headerName: 'Summary', width: 100 },
    // { field: 'category', headerName: 'Category', width: 100, renderCell: ({ row }) => { return row?.category; } },
    // { field: 'language', headerName: 'Language', width: 100 },
    // { field: 'pv_total', headerName: 'Pv Total', width: 100 },
    // { field: 'pv_day', headerName: 'Pv Day', width: 100 },
    // { field: 'pv_week', headerName: 'Pv Week', width: 100 },
    // { field: 'pv_month', headerName: 'Pv Month', width: 100 },
    { field: 'published', headerName: 'Publication Status', width: 150 },
    { field: 'created_at', headerName: 'Creation Date', type: 'date', width: 150 },
    { field: 'updated_at', headerName: 'Updated Date', type: 'date', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        // <GridActionsCellItem
        //   key="editAction"
        //   icon={<Tooltip title="Edit"><Icon>edit</Icon></Tooltip>}
        //   label="Edit"
        //   onClick={() => {
        //     router.push(`${formUrl}/${params.id}`);
        //   }}
        // />,
        // <Button variant="outlined" color="primary" key="view">
        //   View
        // </Button>,
        // <Button variant="outlined" color="primary" key="edit">
        //   Edit
        // </Button>,
        <Button key="delete" variant="outlined" color="error">
          Delete
        </Button>
      ],
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <DataTable
        title={title}
        actionUrl="tabledata.json"
        refresh={false}
        addbutton={'New Article'}
        searchBar={true}
        addRow={() => router.push(`${formUrl}/new`)}
        deleteMultiple={true}
        checkboxSelection={true}
        filterActive={false}
        columns={columns}
        defaultSortModel={[
          { field: 'title', sort: 'asc' }
        ]}
        defaultFilterModel={{
          items: [
            { id: 1, columnField: 'title', operatorValue: 'contains', value: '' },
          ],
        }}
      />
    </React.Fragment>
  );
};

export default withAdminLayout(BlogsIndex);
