//mongoose
var db = require('mongoose');
var Schema = db.Schema;

//connect MongoDB
var Schema = new Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
});
Schema.methods.toJSON = function(){
	return{
		_id: this._id,
		name: this.name,
		age: this.age
	}
}

module.exports = db.model('test', Schema);
