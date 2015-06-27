// Do to start off new DB
// TODO change db: value
use admin
db.createUser(
  {
    user: "siteUserAdmin",
    pwd: "fruit",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);


db.createUser(
	{user: "manager", 
		pwd: "fruit", 
		roles: [ {role : "dbOwner", db: "test"} ]
	}
);

db.createUser(
	{user: "austin", 
		pwd: "strawberry", 
		roles: [ {role : "dbAdmin", db: "test"} ]
	}
);

db.createUser(
	{user: "fbcweb", 
		pwd: "apple", 
		roles: [ {role : "readWrite", db: "test"} ]
	}
);