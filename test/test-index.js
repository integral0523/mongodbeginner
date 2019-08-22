const mob = require('../index.js')

// mob.findOne('test','test',{}).then(res=>console.log(res))    
// mob.find('test','test',).then(res=>console.log(res))    
// mob.insert('test','test',{"test":1}).then(res=>console.log(res))    
mob.update('test','test',{"test":1},{"test":2}).then(res=>console.log(res))    
