const fs = require('fs');

const path = require('path');

//获取文件夹
function getAllAlbum(callback) {
    fs.readdir(path.join(__dirname, '../album'), function (err, files) {

        let dirs = [];

        !function recursize(i) {
            if (i == files.length) {
                callback(err, dirs);
                return;
            }

            const filename = files[i];
            fs.stat(path.join(__dirname,'../album',filename),function (err, stats) {
                if(stats.isDirectory()){
                    dirs.push(filename)
                }
                recursize(i+1);
            })
        }(0)
    })
}

function getAllPhoto(albumName,callback){
    fs.readdir(path.join(__dirname,'../album',albumName),function (err, files) {
        if(err){
            callback(err, files);
            return;
        }

        let photos = [];

        !function recursize(i) {
            if(i == files.length){
                callback(err,photos);
                return;
            }
            const filename = files[i];
            fs.stat(path.join(__dirname,'../album',albumName,filename),function (err, stats) {
                if(!stats.isDirectory()){
                    photos.push(filename);
                }
                recursize(i+1);
            });
        }(0)
    })
}

module.exports.getAllAlbum = getAllAlbum;
module.exports.getAllPhoto = getAllPhoto;