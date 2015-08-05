function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(elem){
			return goodUsers.some(function(idea){
				return idea.id === elem.id;
			});
		});
	};
}
module.exports = checkUsersValid;
