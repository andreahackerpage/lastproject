const Service = require("../models/Service");

exports.getServices = function(req, res, next){
  Service.find()
  .then(services=>res.status(200).json(services))
  .catch(e=>res.status(500).send(e));
}

exports.postServices = (req, res, next)=>{
const newService = new Service({
  type: req.body.type,
  price: req.body.price,
  hour: req.body.hour,

});

newService.save()
.then(service=>res.status(201).json(service))
.catch(e=>res.status(500).send(e));

}