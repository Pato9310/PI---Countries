const { Country, Turism } = require ('../db');
const axios = require('axios');

async function getDbData (req, res) {
    //API call and database load
    try {  
        let apiCall = await axios.get('https://restcountries.com/v3/all');
        apiCall = await apiCall.data.map (async (country) => {
            return await Country.findOrCreate({
                where: {
                    id: country.cca3,
                    name: country.name.common,
                },
                defaults: {
                    flag: country.flags[0],
                    continent: country.continents[0],
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    poblation: country.population
                }
            });
        })
        const apiData = await Country.findAll({
            include: {
                model: Turism,
                attributes: ['name', 'dificulty', 'duration', 'season'],
                    through: {
                        attributes: [],
                    }
            }
        })
        return apiData;
    } catch (err) {
        return console.log(err);
    }
}

module.exports = {
    getDbData,
}