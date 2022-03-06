export enum ActionType {
    SCAN = 'Scan',
    TERMINATE = 'Terminate'
}

export interface DeviceAction {
    id: number,
    actionType: ActionType,
    devices: string[],
    time: Date
}