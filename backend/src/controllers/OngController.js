const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response, next){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); 
        try{
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
        }catch(err){
            next(err);
        }
        
    
        return response.json({id});
    }
}