import { Device } from '../types/device';

const paginate = (deviceArray: Device[], pageSize: number, pageNumber: number): Device[] =>
    deviceArray.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);


export {
    paginate
}