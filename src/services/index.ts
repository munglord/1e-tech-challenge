import { generateMockDevices } from '../tests/mocks/device';
import { Device } from '../types/device';

const getEndpoints = (count = 200): Promise<Device[]> => Promise.resolve(generateMockDevices(count));

// const getEndpoints = (): Promise<Device[]> => new Promise((resolve, reject) => {
//     fetch('https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60')
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             resolve(result);
//         })
//         .catch( err => reject(err));
// })

export {
    getEndpoints
};