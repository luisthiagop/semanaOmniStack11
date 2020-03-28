const connection = require('../database/connection');

module.exports = {
    async index(request, response, next){
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },

    async create(request, response, next){
        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization;

        try {
            const  [id] = await connection('incidents').insert({
                title,
                description,
                value,
                ong_id
            });

            return response.json({id});
        } catch(err) {
            next(err);
        }        
    }
}