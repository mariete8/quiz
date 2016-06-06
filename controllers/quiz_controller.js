//GET/question
exports.question=function(req,res,next){
var answer=req.query.answer ||'';
res.render('quizzes/question',{question:'Capital de Italia', answer:answer});
};
//GET/check
exports.check = function(req, res, next) {
var answer=req.query.answer||"";

	var result = ((answer==='Roma')?'Correcta':'Incorrecta'); 

	res.render('quizzes/result', { result: result,answer:answer  });
};
//GET/index
exports.index = function(req, res, next) {
  if(req.query.search){
    var texto = '%' + req.query.search.toString()+'%';
    texto = texto.replace(/ /g, "%"); //replace espacios por %
    models.Quiz.findAll({where: ["question like ?", texto], include: [models.Attachment]})
        .then(function(quizzes) {
            res.render('quizzes/index',
                {
                    quizzes: quizzes
                });
    }).catch(function(error){next(error);});
