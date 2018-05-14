var keystone = require('keystone');
var Types = keystone.Field.Types;

var Announcement = new keystone.List('Announcement');

Announcement.add({
  title:{
    type:Types.Text,
    initial:true,
    required:true
  },
  description:{
    type: Types.Textarea,
    initial:true,
    required:true
  },
  date:{
    type:Types.Datetime,
    default:Date.now,
    initial: true,
    required: true
  }
});

Announcement.register();
