const Service = require("../models/Order");



exports.deleteCleaner = (req,res,next)=>{
  List.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}

exports.patchCleaner = (req,res,next)=>{
  List.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}

exports.getServices = function(req, res, next){
  Service.find()
  .then(services=>res.status(200).json(services))
  .catch(e=>res.status(500).send(e));
}

exports.postServices = (req, res, next)=>{
  console.log(req.body);
const newService = new Service({
  name: req.body.name,
  price: req.body.price,
  hour: req.body.hour,
  address:req.body.address

});



newService.save()
.then(service=>res.status(201).json(service))
.catch(e=>res.status(500).send(e));

}

exports.getService= function(req, res, next) {
  Service.findById(req.params.id)
  .then(service=>res.status(200).json(service))
  .catch(e=>res.status(500).send(e));
}