var fs = require("fs");

// �첽��ȡ
fs.readFile('test/input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("sync: " + data.toString());
});

// ͬ����ȡ
//var data = fs.readFileSync('input.txt');
//console.log("ͬ����ȡ: " + data.toString());

console.log("����ִ����ϡ�");