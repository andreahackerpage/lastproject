const Profile = require("../models/Profile");

exports.getProfiles = function(req, res, next){
  Profile.find()
  .then(profiles=>res.status(200).json(profiles))
  .catch(e=>res.status(500).send(e));
}

exports.postProfiles = (req, res, next)=>{
const newProfile = new Profile({
  name: req.body.name,
  lastname: req.body.lastname,
  avatar: req.body.avatar,
  email: req.body.email,
  address: req.body.address,
  password: req.body.password
});

newProfile.save()
.then(profile=>res.status(201).json(profile))
.catch(e=>res.status(500).send(e));

}
