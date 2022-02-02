const { Country, Turism } = require('../db');

async function createActivity (req, res) {
    //Create a tourist activity and relate it to a country.
    const {id, name, dificulty, duration, season} = req.body;
    try {
        const newActivity = await Turism.create({
            name,
            id,
            dificulty,
            duration,
            season
        })
        const country = await Country.findAll({
            where: { 
               id: id,
            }
        })
        newActivity.addCountries(country);
        res.send({message: 'Activity created successfully'});
    }catch(err) {
        console.log(err)
    };
}

module.exports = {
    createActivity
};