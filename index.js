// please use broccoli-source instead
var broccoliSource = require('broccoli-source');
var UnwatchedDir = broccoliSource.UnwatchedDir;
module.exports = function(path, options){
	return new UnwatchedDir(path, options);
};
