const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('2Xx2LiTwoV', uuidlib.v4());
	}

module.exports = generateId
