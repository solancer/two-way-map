# Two-Way Map

![GitHub license](https://img.shields.io/github/license/solancer/two-way-map)
![GitHub issues](https://img.shields.io/github/issues/solancer/two-way-map)
![GitHub forks](https://img.shields.io/github/forks/solancer/two-way-map)
![GitHub stars](https://img.shields.io/github/stars/solancer/two-way-map)
![npm version](https://img.shields.io/npm/v/@solancer/two-way-map)
![npm downloads](https://img.shields.io/npm/dm/@solancer/two-way-map)

A TypeScript library providing two-way mapping functionality with order preservation. It is ideal for scenarios requiring bidirectional lookups while maintaining the insertion order of elements. This class offers an intuitive API that aligns with common data structure operations, making it suitable for a variety of use cases.

## Features

- **Two-way Mapping**: Enables association of keys with values and vice versa, allowing for efficient bidirectional lookups.
- **Order Preservation**: Keeps track of the insertion order of elements, ensuring predictable iteration and retrieval.
- **Extendable**: Designed to be easily extendable for various data types, catering to diverse application needs.
- **TypeScript Support**: Full TypeScript support ensures type safety and provides IntelliSense for an enhanced development experience in IDEs.

## Use Cases

`Two-Way Map` is versatile and can be utilized in various real-world scenarios, both in frontend and backend development.

### Frontend Use Cases

1. **UI Component State and Data Mapping**:
   Manage state and data of interactive components like graphs or tables efficiently by mapping component IDs to their states or data objects, facilitating quick state lookups and rendering logic.

2. **Caching User Inputs**:
   In complex forms or multi-step inputs, use `Two-Way Map` to cache user inputs, aiding in validation, auto-fill features, and quick access to input values.

3. **Routing and Navigation**:
   In Single Page Applications (SPAs), map route paths to corresponding view components or page titles for efficient routing and dynamic updates of browser titles or breadcrumbs.

4. **Internationalization and Localization**:
   Simplify the process of handling multiple languages by mapping translation keys to actual text, making it easier to update text or locate the key associated with specific translated content.

### Backend Use Cases

1. **Database ID and Object Mapping**:
   Efficiently map database IDs to their corresponding record objects and vice versa, enabling quick retrieval and management of database records.

2. **Session and User Management**:
   Utilize `Two-Way Map` for mapping session IDs to user objects or user-specific data, streamlining session management and user data retrieval.

3. **Reverse Lookup in APIs**:
   Optimize the lookup and validation process in APIs that support querying by different fields, such as username, email, or user ID, by using `Two-Way Map` for quick field-value mapping.

4. **Data Synchronization**:
   In microservices architecture or distributed systems, keep track of data entities and their corresponding states across different services, aiding in data synchronization and consistency.

These use cases demonstrate the `Two-Way Map`'s ability to enhance efficiency and simplify complex data handling tasks in both frontend and backend environments.

## Installation

To install `two-way-map`, use the following command:

```bash
npm install @solancer/two-way-map
```

## Usage

### Setting and Getting Values

```ts
import { TwoWayMap } from "@solancer/two-way-map";

const map = new TwoWayMap<string, number>();

// Adding key-value pairs
map.set("apple", 1);
map.set("banana", 2);
map.set("cherry", 3);

// Retrieving values
console.log(map.get("banana")); // Outputs: 2
console.log(map.getByValue(3)); // Outputs: 'cherry'
```

### Deleting Elements

```ts
// Deleting an element
map.delete("banana");

// Trying to get deleted element
console.log(map.get("banana")); // Outputs: undefined
```

### Iterating Over Elements

```ts
// Iterating over keys
for (const key of map.keys()) {
  console.log(key);
}

// Iterating over values
for (const value of map.values()) {
  console.log(value);
}
```

### Using pop and popitem

```ts
// Popping a value by key
console.log(map.pop("apple")); // Outputs: 1

// Popping the last item
console.log(map.popitem()); // Outputs: ['cherry', 3]
```

### Copying and Clearing the Map

```ts
// Creating a copy of the map
const copyMap = map.copy();

// Clearing all items from the map
map.clear();
console.log(map.keys()); // Outputs: []
```

### Advanced Usage Example

Let's combine several operations to demonstrate a more complex scenario:

```ts
const fruitMap = new TwoWayMap<string, number>();

// Adding fruits
fruitMap.set("apple", 1);
fruitMap.set("banana", 2);
fruitMap.set("cherry", 3);

// Displaying all fruits
console.log("Fruits in the map:", fruitMap.keys()); // Outputs: ['apple', 'banana', 'cherry']

// Checking a specific fruit
console.log("Banana's number:", fruitMap.get("banana")); // Outputs: 2

// Removing a fruit
fruitMap.delete("apple");
console.log("Fruits after deleting apple:", fruitMap.keys()); // Outputs: ['banana', 'cherry']

// Popping the last item
const lastFruit = fruitMap.popitem();
console.log("Popped the last fruit:", lastFruit); // Outputs: ['cherry', 3]

// Remaining fruits
console.log("Remaining fruits:", fruitMap.entries()); // Outputs: [['banana', 2]]

// Copying and clearing
const fruitMapCopy = fruitMap.copy();
fruitMap.clear();
console.log("Original map after clearing:", fruitMap.keys()); // Outputs: []
console.log("Copied map:", fruitMapCopy.entries()); // Outputs: [['banana', 2]]
```

# TwoWayMap API Reference

## Class: `TwoWayMap<K, V>`

A two-way map that allows for key-to-value and value-to-key mappings, preserving the order in which items are added.

### Constructor

- `constructor()`: Initializes a new instance of the `TwoWayMap` class.

### Methods

#### set

- `set(key: K, value: V): void`

  Adds or updates a key-value pair in the map.

  **Parameters:**

  - `key: K` - The key to set.
  - `value: V` - The value to be associated with the key.

#### get

- `get(key: K): V | undefined`

  Retrieves the value associated with a given key.

  **Parameters:**

  - `key: K` - The key whose value is to be retrieved.

  **Returns:** The value associated with the key, or `undefined` if the key does not exist.

#### getByValue

- `getByValue(value: V): K | undefined`

  Retrieves the key associated with a given value.

  **Parameters:**

  - `value: V` - The value whose key is to be retrieved.

  **Returns:** The key associated with the value, or `undefined` if the value does not exist.

#### delete

- `delete(key: K): boolean`

  Removes a key-value pair from the map.

  **Parameters:**

  - `key: K` - The key to remove.

  **Returns:** `true` if the key was found and removed, `false` otherwise.

#### keys

- `keys(): K[]`

  Returns an array of keys in the map, in the order they were added.

  **Returns:** An array of keys.

#### values

- `values(): V[]`

  Returns an array of values in the map, in the order their corresponding keys were added.

  **Returns:** An array of values.

#### entries

- `entries(): [K, V][]`

  Returns an array of [key, value] pairs in the map, in the order they were added.

  **Returns:** An array of [key, value] pairs.

#### pop

- `pop(key: K, defaultValue?: V): V | undefined`

  Removes the value for the given key and returns it, or returns the `defaultValue` if the key is not in the map.

  **Parameters:**

  - `key: K` - The key to pop.
  - `defaultValue: V` (optional) - The value to return if the key is not found.

  **Returns:** The value associated with the key, or `defaultValue` if provided, or `undefined`.

#### popitem

- `popitem(last: boolean = true): [K, V] | undefined`

  Removes and returns the last (or first, if `last` is `false`) key-value pair from the map.

  **Parameters:**

  - `last: boolean` (optional) - Specifies whether to pop the last item (`true`) or the first item (`false`).

  **Returns:** The last or first [key, value] pair if the map is not empty, or `undefined` if it is.

#### copy

- `copy(): TwoWayMap<K, V>`

  Creates and returns a shallow copy of the map.

  **Returns:** A new `TwoWayMap` instance that contains the same key-value pairs.

#### clear

- `clear(): void`

  Removes all key-value pairs from the map.

## Data Structure and Rationale

The `Two-Way Map` library is designed using a composite data structure that combines features of a Map and a LinkedList. This choice is driven by the specific requirements of bidirectional lookup and order preservation, ensuring both efficiency and functionality in scenarios where these features are crucial.

### Why This Data Structure?

#### Bidirectional Lookup

- The core of the `Two-Way Map` is built upon two Maps - one for the key-to-value mapping and another for the value-to-key mapping. This structure allows for constant-time (O(1)) lookup in both directions, which is a significant advantage over iterating through an array or a standard map where you would typically achieve O(n) lookup time.

#### Order Preservation

- In addition to bidirectional lookup, preserving the insertion order is a key requirement for many use cases. To achieve this, the library utilizes a LinkedList. This allows us to maintain the order of elements as they are inserted, which is not possible with standard JavaScript objects or Maps.

#### Trade-offs

- While this data structure provides significant benefits in terms of functionality, it does come with trade-offs, particularly in terms of memory usage. By maintaining two Maps and a LinkedList, the `Two-Way Map` can consume more memory than a simple Map or object. However, for many applications, this trade-off is justified by the benefits of quick bidirectional access and order preservation.

### When to Use `Two-Way Map`?

- `Two-Way Map` is ideal for applications where both the key and value are important for retrieval and where the order of elements matters - for instance, in UI state management, session handling, or complex data transformations.

### Alternative Data Structures

- For applications that only require simple key-to-value mapping without the need for reverse lookup or order preservation, a standard Map or object would be more memory-efficient.
- If only order is important and not bidirectional mapping, an Array or a LinkedList might suffice.

### Conclusion

The `Two-Way Map` library is crafted to fill a specific niche where both bidirectional lookup and order preservation are required. It strikes a balance between performance and functionality, making it a suitable choice for a range of applications where these features provide a tangible benefit.

## Contributing

Contributions are always welcome! Feel free to open a pull request or an issue if you have suggestions or find a bug.

## License

This project is licensed under the [MIT License](./LICENSE).
