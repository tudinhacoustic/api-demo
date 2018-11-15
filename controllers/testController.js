//Connect models
const test = require('../models/test');

//RestfullAPI
module.exports = {
  getAll: (req, res, next)=>{
    test.find()
  	.exec()
  	.then(result => {
  		console.log(result);
  		res.status(200).json({
  			count : result.length,
  			data: result.map(doc => {
  				return {
  					_id: doc._id,
  					name: doc.name,
  					age: doc.age,
  					default: {
  						TYPE: 'GET',
  						URL: 'http://localhost:3000/api.html' +doc._id,
  					}
  				}
  			})
  		})
  	})
  	.catch(err => {
  		console.log(err);
  		res.status(500).json({error: err});
  	})
  },
  findById: function(req, res, next){
    const id = req.params.id;
  	test.findOne({ _id: id })
  	.exec()
  	.then(result => {
      res.status(200).json({
        data: result,
        default: {
          TYPE: 'GET',
          URL: 'http://localhost:3000/api/' +result._id
        }
      })
    })
  	.catch(err => {
  		res.status(500).json({data: 'Không có dữ liệu'})
  	})
  },
  create: function(req, res, next){
    const post = new test({
  		name: req.body.name,
  		age: req.body.age
  	})
  	.save()
  	.then(result => {
  		res.status(201).json({
  			message: 'success',
        data: result,
        default: {
          TYPE: 'POST',
          URL: 'http://localhost:3000/'+result._id
        }
  		})
  	})
  	.catch(err => {
  		res.status(500).json({
  			error: err
  		})
  	})
  },
  deleteById: function(req, res, next){
    const id = req.params.id;
  	test.remove({ _id: id })
  	.exec()
  	.then(result => {
  		res.status(200).json({
  			message: 'Xóa thành công',
  			ID: id
  		})
  	})
  	.catch(err => {
  		res.status(500).json({error: err})
  	})
  },
  updateById: function(req, res, next){
    const id = req.params.id;
  	test.update({ _id:id }, req.body)
  	.exec()
  	.then(result => {
  		res.status(201).json({
  			message: 'Sửa ID:' +id+ ' thành công',
  		})
  	})
  	.catch(err => {
  		error: err
  	})
  }
}
