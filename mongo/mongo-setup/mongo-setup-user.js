db.getSiblingDB('resume').createUser(
  {
    user: 'nawitoUser',
    pwd: 'password',
    roles: [
      { role: 'readWrite', db: 'resume' }
    ]
  }
)
db.getSiblingDB('admin').createUser(
  {
    user: 'admin',
    pwd: 'changeMe',
    roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }]
  }
)
db.getSiblingDB('admin').createUser(
  {
    user: 'adminUser',
    pwd: 'changeMe',
    roles: [{ role: 'clusterAdmin', db: 'admin' }]
  }
)
