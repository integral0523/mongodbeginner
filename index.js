const mongodb = require('mongodb') 
const b = {
    update : async(dbName, collectionName, filter, update, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).updateOne(filter,{$set:{update}},(err,res)=>{
            if(err){
                console.error(err)
                return
            }
            return true
        })
        client.close()
    },
    insert : async(dbName, collectionName, insert, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).insertOne({insert},(err,res)=>{
            if(err){
                console.error(err)
                return
            }
            return true
        })
        client.close()
    },
    upsert : async(dbName, collectionName, filter, update, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).updateOne(filter,{$set:{update}},{upsert:true},(err,res)=>{
            if(err){
                console.error(err)
                return
            }
            return true
        })
        client.close()
    },
    find : async(dbName, collectionName, filter, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).find(filter,(err,documents)=>{
            if(err){
                console.error(err)
                return
            }
            return documents
        })
        client.close()
    },
    findOne : async(dbName, collectionName, filter, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).find(filter,(err,documents)=>{
            if(err){
                console.error(err)
                return
            }
            return documents[0]
        })
        client.close()
    },
    remove: async(dbName, collectionName, filter, url="mondodb://localhost:27017")=>{
        client = await monogdb.MongoClient.connect(url,{useNewUrlParser:true});
        db = await client.db(dbName)
        await db.collection(collectionName).remove(filter,(err,res)=>{
            if(err){
                console.error(err)
                return
            }
            return true
        })
        client.close()
    }
}
module.exports = b;