/* GET home page */

// create controller export
// reads req, returns res 
// res.render takes as arguments the view template (no extension needed) 
//and JS data obj
module.exports.home = function(req, res){
    //console.log(req.method, req.url);
    res.render('layout', { title: 'Day Planner' });
};
