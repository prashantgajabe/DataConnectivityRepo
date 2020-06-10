const foodlist = function(req,res){
    res.render('foodlist', {title:'My favourite food'});
};
const favoriteFood = function(req, res){
    res.render('favorite-food', {title: 'Biryani'});
};



module.exports = {
    favoriteFood,
    foodlist
};