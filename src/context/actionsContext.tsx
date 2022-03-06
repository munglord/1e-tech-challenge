import React from 'react';

import { DeviceAction } from "../types/deviceAction";

type ActionsContextType = {
    actions: DeviceAction[],
    addAction: (action: DeviceAction) => void
}

const actions: DeviceAction[] = [];

export const ActionsContext = React.createContext<ActionsContextType>({
    actions,
    addAction: (action: DeviceAction) => { actions.push(action) }
});
