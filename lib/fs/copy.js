var sys = require('util');
var events = require('events');
var path = require('path');
var fs = require('fs');

var copy = function copy(src, dst, callback) {
  var self = this;

  if(!callback) {
    callback = function(){};
  }

  self.on('error', function(err) {
    callback(err);
  });

  self.on('validations', function() {

    fs.exists(src, function(exists) {

      if(!exists) {

        self.emit('error', new Error(src + ' does not exists. Nothing to be copied'));
        return;
      }

      fs.stat(src, function(err, stat) {

        if(err) {

          self.emit('error', err);
          return;
        }

        if(stat.isDirectory()) {

          self.emit('error', new Error(src + ' is a directory. It must be a file'));
          return;
        }

        if(src == dst) {

          self.emit('error', new Error(src + ' and ' + dst + 'are identical'));
          return;
        }

        self.emit('open_infd');
      });
    });
  });

  self.on('open_infd', function() {

    fs.open(src, 'r', function(err, infd) {

      if(err) {

        self.emit('error', err);
        return;
      }

      self.emit('open_outfd', infd);
    });

  });

  self.on('open_outfd', function(infd) {

    fs.open(dst, 'w', function(err, outfd) {

      if(err) {

        self.emit('error', err);
        return;
      }

      self.emit('sendfile', infd, outfd);
    });
  });

  self.on('sendfile', function(infd, outfd) {

    fs.fstat(infd, function(err, stat) {

      if(err) {

        self.emit('error', err);
        return;
      }
      
      fs.sendfile(outfd, infd, 0, stat.size, function() {

        self.emit('close_fds', infd, outfd);
        callback();
      });
    });
  });

  self.on('close_fds', function(infd, outfd) {

    fs.close(infd, function(err) {

      if(err) {
        self.emit('error', err);
      }

    });

    fs.close(outfd, function(err) {

      if(err) {

        self.emit('error', err);
      }

    });
  });

  self.emit('validations');
};

sys.inherits(copy, events.EventEmitter);
   
module.exports = function(src, dst, callback){

  return new copy(src, dst, callback);
};