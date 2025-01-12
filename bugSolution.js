```javascript
// Solution using collation
db.collection('users').createIndex( { name: 1 }, { collation: { locale: 'en', strength: 2 } } );

const query = { name: 'Jöhn' }; // Exact match with diacritics
const cursor = db.collection('users').find(query);
cursor.forEach(user => console.log(user.name));

// Solution using a normalized query
// Requires a library for string normalization (e.g., 'normalize-text')
const { normalize } = require('normalize-text');

const normalizedSearchTerm = normalize('John', 'NFKD');
const query2 = { name: { $regex: new RegExp(normalizedSearchTerm, 'i') } };

const cursor2 = db.collection('users').find(query2);
cursor2.forEach(user => console.log(user.name));
```