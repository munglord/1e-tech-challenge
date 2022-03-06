import { createTheme, PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ActionsContext } from './context/actionsContext';
import { ColorModeContext } from './context/colorModeContext';
import ActionLogs from './pages/ActionLogs';
import EndpointsManager from './pages/EndpointsManager';
import { DeviceAction } from './types/deviceAction';

const App = () => {
    const [actions, setActions] = useState<DeviceAction[]>([]);
    const [mode, setMode] = useState<PaletteMode>('light');

    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );

    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode,
            },
          }),
        [mode],
      );

    const addAction = (deviceAction: DeviceAction) => {
        setActions([...actions, deviceAction]);
    }

    return (
         <ActionsContext.Provider value={{
            actions,
            addAction
        }}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                        <Route path="/endpoints" element={<EndpointsManager />} />
                        <Route path="/logs" element={<ActionLogs />} />
                        <Route
                            path="*"
                            element={<Navigate to="endpoints" />}
                        />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
           
        </ActionsContext.Provider>
    )
}

export default App;