 const request = require('request');
 const cheerio = require('cheerio')

//  request('https://www.smzdm.com/youhui/',(err,req) => {
//     if(!err){
//         console.log(req.body);
//     }
//  });

request('https://www.smzdm.com/youhui/', (err,req)=>{
    if(!err){
        var body = req.body;
        // console.log(body);
        // cheerio 将内存中的html 模拟浏览器的方式来渲染网页
        var $ = cheerio.load(body,{
            decodeEntities:false
        });
        $('.list.list_preferential').each((i,item) =>{
            // console.log(i,item);
            // console.log("------------------------------");
            var $title = $('.itemName a',item);
            var url = $title.attr('href');
            var title = $title.html();
            console.log(url,title)

            var hl = $title.children().text().trim();
            var img = $('img',item).attr('src');
            var desc = $('.lrInfo',item).html().trim();
            var mall = $('.botPart a.mall',item).text().trim();
            console.log(title, hl,url,img,desc,mall)
        });
    }
})
