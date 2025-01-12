```javascript
const query = { name: /John/i }; // Case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach(user => {
  console.log(user.name); // Access the name field
});
```