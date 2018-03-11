/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 list:function(req,res){         //Function tanımlarken : kullanılacak.
         Articles.find({}).exec(function(err,articles){
             if(err){
                 res.send(500,{eror:"Veritabanı Hatası"});
             }
             res.view("list",{articles:articles});
         });
    },
    add:function(req,res){
        res.view("add");
    },
    create:function(req,res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title:title,body:body}).exec(function(err){
            if(err){
                res.send(500,{eror:"Veritabanı Hatası"});
            }
            res.redirect("/articles/list");  
        });
    },
    delete:function(req,res){
        Articles.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500,{eror:"Veritabanı Hatası"});
            };
            res.redirect("/articles/list");
        });
    },
    edit:function(req,res){
        Articles.findOne({id:req.params.id}).exec(function(err,article){
            if(err){
                res.send(500,{eror:"Veritabanı Hatası"});
            }
            res.view("edit",{article:article});
        });
    },
    update:function(req,res){
        var title=req.body.title;
        var body=req.body.body;
        Articles.update({id:req.params.id},{title:title,body:body}).exec(function(err){
            if(err){
                res.send(500,{eror:"Veritabanı Hatası"});
            }
            res.redirect("/articles/list");
        });
    }
};

