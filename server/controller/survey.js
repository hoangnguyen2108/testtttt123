let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let SurveyModel = require('../models/surveys');
const survey = require('../models/surveys');


module.exports.displayEditPageTF = (req, res, next) => {
    let id = req.params.id;

    SurveyModel.TFQS.findById(id, (err, surveyToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('surveys/editTF', { title: 'Edit an existing survey', survey: surveyToEdit })
        }
    });
}

module.exports.processEditPageTF = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        question: {

            "_id": id,
            "question": req.body.question[i].question

        },

        true: {
            default: 0
        },

        false: {
            default: 0
        }


    });

    SurveyModel.updateOne({ _id: id }, updatedSurvey, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the survey list
            res.redirect('/survey');
        }
    });
}

module.exports.processEditPageMC = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id": id,
        "option": option,
        "question": question,
        "title": title

    });

    SurveyModel.updateOne({ _id: id }, updatedSurvey, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the survey list
            res.redirect('/survey');
        }
    });
}


module.exports.displayEditPageMC = (req, res, next) => {
    let id = req.params.id;

    SurveyModel.MCQS.findById(id, (err, surveyToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('/survey/mcsurvey', { title: 'Edit an existing survey', survey, MCQS: surveyToEdit })
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    SurveyModel.TFQS.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });


}

module.exports.performDeleteMC = (req, res, next) => {
    let id = req.params.id;
    SurveyModel.MCQS.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}
