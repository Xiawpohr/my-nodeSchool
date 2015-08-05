function loadUsers(userIds, load, done) {
	var users = [];
        for (var i = 0; i < userIds.length; i++) {
		function foo(){
		       	users.push(load(userIds[j]));
		}
		foo();
        }
        return users;
}
module.exports = loadUsers;
