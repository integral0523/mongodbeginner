# mongodbeginner
npm make you to use MongoDB easier

## how to use
dbUrl is setted default value "mongodb://localhost:27017"

### update
if succeeded, return true. else, return false.
```
mongodbeginner.update(dbName, collectionName, filter, data, dbUrl)
```

### insert
if succeeded, return true. else, return false.
```
mongodbeginner.insert(dbName, collectionName, data, dbUrl)
```

### upsert(divided from update)
if succeeded, return true. else, return false.
```
mongodbeginner.upsert(dbName, collectionName, filter, data, dbUrl)
```
### find
if succeeded, return found data array.
```
mongodbeginner.find(dbName, collectionName, filter, dbUrl)
```
### findOne
if succeeded, return found data object.
```
mongodbeginner.find(dbName, collectionName, filter, dbUrl)
```
### remove
if succeeded, return true. else, return false.
```
mongodbeginner.remove(dbName, collectionName, filter, dbUrl)
```
