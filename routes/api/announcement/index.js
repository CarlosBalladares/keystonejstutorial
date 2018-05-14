// This is a route for the api /api/announcement

var keystone = require('keystone');
var Announcement = keystone.list('Announcement').model;
var handlers = {
  getAnnouncements: function(req, res){
      Announcement.find().exec(function(err, data){
        if(err){
          console.log(err);
          res.status(500).send('DB Error');
        }else{
          res.status(200).send(data);
        }
      });
  }
}

module.exports = handlers;
