const express = require('express');
const multer = require('multer');
var app = express();
var upload = multer({});
app.use(express.static('./public'));
app.post('/file-size', upload.single('file'), function(req, res) {
	res.end(JSON.stringify({
		"size": req.file.size
	}));
}).listen(process.env.PORT || 3000);