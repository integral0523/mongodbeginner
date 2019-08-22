const mongodb = require('mongodb') 
const b = {
    update : async(dbName, collectionName, filter, update, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        await db.collection(collectionName).updateOne(filter,{$set:update},(err,res)=>{
            if(err){
                console.error(err)
                client.close()
                return false
            }
            client.close()
            return true
        })
    },
    insert : async(dbName, collectionName, insert, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        await db.collection(collectionName).insertOne(insert,(err,res)=>{
            if(err){
                console.error(err)
                client.close()
                return false
            }
            client.close()
            return true
        })
    },
    upsert : async(dbName, collectionName, filter, update, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        await db.collection(collectionName).updateOne(filter,{$set:{update}},{upsert:true},(err,res)=>{
            if(err){
                console.error(err)
                client.close()
                return
            }
            client.close()
            return true
        })
    },
    find : async(dbName, collectionName, filter, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        documents = await db.collection(collectionName).find(filter).toArray()
        client.close()
        return documents
    },
    findOne : async(dbName, collectionName, filter, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        documents = await db.collection(collectionName).find(filter).toArray()
        client.close()
        return documents[0]
    },
    remove: async(dbName, collectionName, filter, url="mongodb://localhost:27017")=>{
        client = await mongodb.MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
        db = await client.db(dbName)
        await db.collection(collectionName).remove(filter,(err,res)=>{
            if(err){
                console.error(err)
                client.close()
                return false
            }
            client.close()
            return true
        })
    }
}
module.exports = b;