'use strict';

const models = require('../models');
const shortModel = models.short;

const services = require('../services');
const sortService = services.short;

exports.all = async (req, res, next) => {
    try {
        const data = await shortModel.find();
        res.send(data);
    } catch (err) {
        next(err);
    }
};

exports.open = async (req, res, next) => {
    try {
        const data = await shortModel.findOne({ short: req.url.substr(1) });
        const { uri } = data;
        res.send({ uri });
    } catch (err) {
        next(err);
    }
};

// обработчик для укорачивателя ссылок.
// можешь смело переименовать его как тебе угодно ;)
exports.make = async (req, res, next) => {
    try {
        if (!req.body.uri) {
            res.json({ "error": "uri не существует. Пожалуйста, предоставьте правильный uri" });
        }

        // проверяем, если ссылка уже создавалась,
        // возвращаем старую, чтобы не делать лишнюю запись в базу
        const oldShort = await shortModel.findOne({ uri: req.body.uri });
        if (oldShort) {
            const { uri, short } = oldShort;
            res.json({ uri, short });
        } else {
            // получаем короткую ссылку
        // это наша функция, котору мы написали несколько дней назад
            const short = sortService();

            // записываем результат в базу
            const { uri } = req.body;
            await shortModel.create({ uri, short });

            // возвращаем результат
            res.json({ short });
        }
    } catch (err) {
        next(err);
    }
};
