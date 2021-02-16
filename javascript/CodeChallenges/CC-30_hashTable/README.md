# Hashtables
More efficient data structure? Intro to implememtting it.

## Challenge
<!-- Description of the challenge -->
Implement a Hashtable with the following methods:

- hash: takes in an arbitrary key and returns an index in the collection.

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

- get: takes in the key and returns the value from the table.

- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Theoretically O(1) for space efficiency.
> Tears, so many tears


## API
<!-- Description of each method publicly available in each of your hashtable -->
42

## Testing?

> npm test or npm test hashtable.test.js

> Write tests to prove the following functionality:

Adding a key/value to your hashtable results in the value being in the data structure

Retrieving based on a key returns the value stored

Successfully returns null for a key that does not exist in the hashtable

Successfully handle a collision within the hashtable

Successfully retrieve a value from a bucket within the hashtable that has a collision

Successfully hash a key to an in-range value
