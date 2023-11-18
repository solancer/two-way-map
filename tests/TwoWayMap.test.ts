import { TwoWayMap } from '../src/TwoWayMap';

describe('TwoWayMap', () => {
    let map: TwoWayMap<string, number>;

    beforeEach(() => {
        map = new TwoWayMap<string, number>();
    });

    test('should set and get values', () => {
        map.set('one', 1);
        expect(map.get('one')).toBe(1);
        expect(map.getByValue(1)).toBe('one');
    });

    test('should maintain insertion order for keys', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.set('three', 3);

        expect(map.keys()).toEqual(['one', 'two', 'three']);
    });

    test('should delete items correctly', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.delete('one');

        expect(map.get('one')).toBeUndefined();
        expect(map.getByValue(1)).toBeUndefined();
        expect(map.keys()).toEqual(['two']);
    });

    test('should return correct values', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.set('three', 3);

        expect(map.values()).toEqual([1, 2, 3]);
    });

    test('should return correct entries', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.set('three', 3);

        expect(map.entries()).toEqual([['one', 1], ['two', 2], ['three', 3]]);
    });

    test('should return undefined for non-existent keys', () => {
        expect(map.get('one')).toBeUndefined();
    });

    test('should return undefined for non-existent values', () => {
        expect(map.getByValue(1)).toBeUndefined();
    });

    test('should return false when deleting non-existent keys', () => {
        expect(map.delete('one')).toBe(false);
    });

    test('should return true when deleting existing keys', () => {
        map.set('one', 1);
        expect(map.delete('one')).toBe(true);
    });

    test('should return correct values after deleting', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.set('three', 3);
        map.delete('two');

        expect(map.values()).toEqual([1, 3]);
    });

    test('pop method should remove and return value', () => {
        map.set('one', 1);
        const poppedValue = map.pop('one');
        expect(poppedValue).toBe(1);
        expect(map.get('one')).toBeUndefined();
    });

    test('pop method should return default value for non-existent key', () => {
        const defaultValue = 42;
        const poppedValue = map.pop('non-existent', defaultValue);
        expect(poppedValue).toBe(defaultValue);
    });

    test('popitem should remove and return the last item', () => {
        map.set('one', 1);
        map.set('two', 2);
        const poppedItem = map.popitem();
        expect(poppedItem).toEqual(['two', 2]);
        expect(map.get('two')).toBeUndefined();
    });

    test('popitem should remove and return the first item when last is false', () => {
        map.set('one', 1);
        map.set('two', 2);
        const poppedItem = map.popitem(false);
        expect(poppedItem).toEqual(['one', 1]);
        expect(map.get('one')).toBeUndefined();
    });

    test('copy method should create a shallow copy of the map', () => {
        map.set('one', 1);
        const copy = map.copy();
        expect(copy).not.toBe(map);
        expect(copy.get('one')).toBe(1);
    });

    test('clear method should remove all items', () => {
        map.set('one', 1);
        map.set('two', 2);
        map.clear();
        expect(map.keys().length).toBe(0);
    });
});
