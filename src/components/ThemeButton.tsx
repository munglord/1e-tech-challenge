import { useTheme } from '@mui/system';
import React from 'react';
import { ColorModeContext } from '../context/colorModeContext';
import { IconButton } from '@mui/material';


const ThemeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
    {/* {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} */}
    {theme.palette.mode === 'dark' ? "Dark" : "Light"}
  </IconButton>
}

export default ThemeButton;