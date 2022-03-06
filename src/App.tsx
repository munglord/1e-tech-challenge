import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ActionsContext } from './context/actionsContext';
import ActionLogs from './pages/ActionLogs';
import EndpointsManager from './pages/EndpointsManager';
import { DeviceAction } from './types/deviceAction';

const App = () => {
    const [actions, setActions] = useState<DeviceAction[]>([]);

    const addAction = (deviceAction: DeviceAction) => {
        setActions([...actions, deviceAction]);
    }

    return (
         <ActionsContext.Provider value={{
            actions,
            addAction
        }}>
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
        </ActionsContext.Provider>
    )
}

export default App;