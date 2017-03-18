const express = require('express');
const router = express.Router();

const file = require('../models/file');

router.get('/',function (req, res, next) {
    file.getAllAlbum(function (err, files) {
        if(err){
            next();
            return;
        }
        res.render('index',{
            'albumArr':files
        });
    });
});

router.get('/:albumName', function(req, res, next){

    // 忽略chrmoe 浏览器的收藏夹图标请求
    if(req.url == '/favicon.ico') {return}
    // 获取albumName文件夹下的所有图片
    file.getAllPhoto(req.params.albumName, function(err, files){

        // 当出现错误的时候
        if (err){
            next();
            return;
        }

        // 模板渲染
        res.render('photo', {
            'photoArr':files
        });
    });
});
//导出router
module.exports = router;