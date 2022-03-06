import { Button, CircularProgress, Container, Pagination, Typography } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';
import DeviceCard from "../components/DeviceCard";
import HeaderBar from "../components/HeaderBar";
import { PageContainer } from "../components/PageContainer";
import { ActionsContext } from "../context/actionsContext";
import { getEndpoints } from "../services";
import { Device } from "../types/device";
import { ActionType } from "../types/deviceAction";
import { paginate } from "../utils";

const DeviceList = styled(Container, {
    name: 'DeviceList',
    slot: 'Wrapper'
  })`
    display: flex;
    flex-wrap: wrap;
  `;

const StyledSpinner = styled(CircularProgress)`
  margin-left: 40%;
`;

const ActionButtonContainer = styled('div')`
  float: right;
`;

type EMProps = {

};

type EMState = {
    endpoints: Device[],
    selectedDevices: Device[],
    page: number,
    loading: boolean
}

  
  
class EndpointsManager extends React.Component<EMProps, EMState> {
    state: EMState = {
        endpoints: [],
        selectedDevices: [],
        page: 1,
        loading: true
    };
    static contextType = ActionsContext;

    devicesPerPage = 50;

    constructor(props: EMProps) {
        super(props);

        this.selectDevice = this.selectDevice.bind(this);
        this.isDeviceSelected = this.isDeviceSelected.bind(this);
        this.scanDevices = this.scanDevices.bind(this);
        this.terminateDevices = this.terminateDevices.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        getEndpoints().then(
            endpoints => {
                this.setState({
                    endpoints: endpoints,
                    loading: false
                })
            }
        ).catch(err => {
            console.error(err);
        });
    }

    selectDevice(device: Device) {
        this.setState({
            selectedDevices: this.isDeviceSelected(device) ? 
            this.state.selectedDevices.filter(selectedDevice => selectedDevice.id !== device.id) :
            [...this.state.selectedDevices, device]
        });
    }

    isDeviceSelected(device: Device) {
        return this.state.selectedDevices.includes(device);
    }

    hasDeviceSelected(): boolean {
        return this.state.selectedDevices.length > 0;
    }

    scanDevices() {
        this.context.addAction({
            id: this.context.actions.length + 1,
            actionType: ActionType.SCAN,
            devices: this.state.selectedDevices.map(device => device.deviceName),
            time: new Date()
        });
    }

    terminateDevices() {
        this.context.addAction({
            id: this.context.actions.length + 1,
            actionType: ActionType.TERMINATE,
            devices: this.state.selectedDevices.map(device => device.deviceName),
            time: new Date()
        });
    }

    changePage(event: React.ChangeEvent<unknown>, value: number) {
        this.setState({
            page: value
        })
    }


    render() {
        return ( <Container>
            <HeaderBar />
            <PageContainer>
                <Typography variant="h3">Endpoints Manager</Typography>
                <Typography variant="h5">Available Endpoints</Typography>
                <ActionButtonContainer>
                    <Button disabled={!this.hasDeviceSelected()} onClick={this.scanDevices}>Scan</Button>
                    <Button disabled={!this.hasDeviceSelected()} onClick={this.terminateDevices}>Terminate</Button>
                </ActionButtonContainer>

                <DeviceList>
                { this.state.loading && <StyledSpinner /> }

                {
                    paginate(this.state.endpoints, this.devicesPerPage, this.state.page).map(device => DeviceCard({
                        device,
                        onDeviceSelected: this.selectDevice,
                        isDeviceSelected: this.isDeviceSelected(device)
                    }))
                }
                </DeviceList>
            </PageContainer>
            <Pagination count={this.state.endpoints.length / this.devicesPerPage } page={this.state.page} onChange={this.changePage} />
          </Container>)
    }
}

export default EndpointsManager;