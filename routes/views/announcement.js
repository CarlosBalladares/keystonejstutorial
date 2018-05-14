var keystone = require('keystone');

exports = module.exports = function(req, res){
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'announcement';

  locals.data = {
    announcements:[]
  }

  var Announcement = keystone.list('Announcement').model;
  Announcement.find().exec(function(err, data){
    locals.data.announcements = data;
  });
  view.render('announcement');

};
