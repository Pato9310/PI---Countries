const { Country, Activity } = require ('../db');
const {Op} = require('sequelize');
const { getDbData } = require('./api.controller');

async function getCountries (req, res) {
    //The information of the countries is obtained from the database and shown to the client
    const { name } = req.query;
    const dbData = await getDbData();
    if (!name) return res.status(200).send(dbData);
    //If the query parameter exists, the names that match that parameter are returned
    try {
        const list = await Country.findAll({
            include: Activity,
            where: {
                name: {
                    [Op.substring]: `${name}`
                }
            }
        })
        list.length ? res.send(list.map(country => country)) :
        res.status(404).send({message: "Country does not found"});
    }catch(error) {
        console.log(error);
    }
}

async function getByCountryId (req, res) {
    //Returns the country that matches the id
    const { id } = req.params;
    if (!id) return res.status(404).send({message: 'Should enter an ID'});
    try {
        const country = await Country.findAll({
            where:{ id: id },
            include: {
                model: Activity,
                attributes: ['name', 'dificulty', 'duration', 'season'],
                    through: {
                        attributes: [],
                    }
            }
        })
        res.send(country);
    } catch (error) {
        res.status(404).send({ message: 'Should enter a valid ID'})
    }
}

module.exports = {
    getCountries,
    getByCountryId
}