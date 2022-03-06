import React from 'react';
import { Device } from '../types/device';
import { CardActionArea, CardContent, Typography, Card } from '@mui/material';
import { styled } from "@mui/system";

type StyledCardProps = {
    isDeviceSelected: boolean
}

const StyledCard = styled(Card, {
    name: 'StyledCard',
    slot: 'Wrapper'
})<StyledCardProps>((props) => { 
    return ({
    margin: '1em',
    minWidth: '300px',
    maxWidth: '25%',
    backgroundColor: props.isDeviceSelected ? props.theme.palette.grey['400'] : props.theme.palette.background.default
 }) });

const DeviceInfo = (infoName: string, infoValue: string | number) => 
    <Typography variant="h6">{infoName}: <Typography variant="body2">{infoValue}</Typography></Typography>

type DeviceCardProps = {
    device: Device,
    onDeviceSelected: (device: Device) => void,
    isDeviceSelected: boolean
}

const DeviceCard = (deviceCardProps: DeviceCardProps) => {
    const { device, onDeviceSelected, isDeviceSelected } = deviceCardProps;

    return <StyledCard key={device.id} isDeviceSelected={isDeviceSelected}>
        <CardActionArea onClick={() => void onDeviceSelected(device)}>
            <Typography variant="h5">
                { device.deviceName }
            </Typography>
            <CardContent>
                {DeviceInfo('Status', device.status)}
                {DeviceInfo('Application count', device.applicationCount)}
                {DeviceInfo('Operating System', device.operatingSystem)}
                {DeviceInfo('IP Address', device.ipAddress)}
            </CardContent>
        </CardActionArea>
       
    </StyledCard>
}

export default DeviceCard;