import { Device } from '../../types/device';
import endpoints from './Endpoints.json';

const  generateMockDevice = (): Device => endpoints[0];

const generateMockDevices = (count: number): Device[] => endpoints.slice(0, count);

export {
    generateMockDevice,
    generateMockDevices
}