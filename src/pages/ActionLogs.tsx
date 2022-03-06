import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import HeaderBar from '../components/HeaderBar';
import { PageContainer } from '../components/PageContainer';
import { ActionsContext } from '../context/actionsContext';
import { DataGrid } from '@mui/x-data-grid';
import ThemeButton from '../components/ThemeButton';

const ActionLogs = () => {
    const { actions } = useContext(ActionsContext);

    const columns = [
        {
            field: 'id', headerName: 'S. No.',
            width: 40
        },
        {
            field: 'actionType', headerName: 'Action',
            valueFormatter: (params: any) => params.value.toString()
        },
        {
            field: 'devices', headerName: 'Devices',
            valueFormatter: (params: any) => params.value.toString(),
            minWidth: 400
        },
        {
            field: 'time', headerName: 'Time',
            valueFormatter: (params: any) => params.value.toLocaleString(),
            minWidth: 250

        }
    ]

    return (
        <Container>
            <HeaderBar />
            <PageContainer>
                <Typography variant="h3">Action Logs</Typography>
                <DataGrid autoHeight rows={actions} columns={columns} />
            </PageContainer>
            <ThemeButton />
        </Container>
    )
};

export default ActionLogs;