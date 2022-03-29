import React from 'react';
import Head from 'next/head';
// import { apiConfig } from 'utils/api';
import { withAdminLayout } from 'component/layout/index';
import { Grid, Card, CardHeader, Icon, CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  const MyDashboard = [
    {
      id: 1,
      name: 'Tag Cloud',
      link: '/tag_cloud',
      icon: 'user'
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Grid container spacing={2}>
        {MyDashboard && MyDashboard.map((value, index) => {
          return (
            <Grid item xs={4} key={`MyDashboard${index}`}>
              <Card onClick={() => router.push(value.link)}>
                <CardActionArea>
                  <CardHeader
                    avatar={
                      <Icon color="action">
                        {value.icon}
                      </Icon>
                    }
                    title={value.name}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default withAdminLayout(Dashboard);
