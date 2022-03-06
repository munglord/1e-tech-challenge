import { AppBar, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const AppBarLink = styled(Link)`
    color: white;
    margin-right: 1em;
`

const StyledAppBar = styled(AppBar)`
    marginBottom: 1em;
    padding: 1em;s
`;

const HeaderBar = () => {
    return  (
    <StyledAppBar>
        <Container>
            <AppBarLink to="/endpoints"><Typography variant="button">Endpoints Manager</Typography></AppBarLink>
            <AppBarLink to="/logs"><Typography variant="button">Action Logs</Typography></AppBarLink>
        </Container>
    </StyledAppBar>);
}

export default HeaderBar;