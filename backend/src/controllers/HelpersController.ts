import {Request, Response}  from 'express'

import User from '../models/User'

export default{

    async resetUser(req: Request, res: Response){
        
        const { instagram } = req.query

        await User.deleteMany({isntagram: instagram})
       
        return res.status(204).end()

    }
}