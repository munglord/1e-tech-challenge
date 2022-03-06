import { paginate } from ".";
import { generateMockDevices } from '../tests/mocks/device';

describe('Paginate', () => {
    it('should return empty array if deviceArray is empty', () => {
        const result = paginate([], 10, 1);
        expect(result).toEqual([]);
    });

    it('should splice the list and return an array of length pageSize', () => {
        const expectedResult = generateMockDevices(3);
        const result = paginate(generateMockDevices(10), 3, 1);
        expect(result).toEqual(expectedResult);
    });
});