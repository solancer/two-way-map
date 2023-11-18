export interface ITwoWayMap<K, V> {
    set(key: K, value: V): void;
    get(key: K): V | undefined;
    getByValue(value: V): K | undefined;
    delete(key: K): boolean;
    keys(): K[];
    values(): V[];
    entries(): [K, V][];
    pop(key: K, defaultValue?: V): V | undefined;
    popitem(last?: boolean): [K, V] | undefined;
    copy(): ITwoWayMap<K, V>;
    clear(): void;
}