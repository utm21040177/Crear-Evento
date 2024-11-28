
import { GroupModel } from "../models/GroupsModel.js";

export default{
    createGroup: async(res,req)=>{

        try {
            
            const group = {
                name: req.body.name,
                participantsID:req.body.participantsID,
                leader: req.body.leader
            }
            await GroupModel.create(group);
            return res.status(200).json({msg:"Se ha creado con exito"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Ha ocurrido un error"})
            
        }


    },
    registerEvent: async (res,req)=>{

        const idEvent = req.params.id;
        const event = await EventModel.findById(idEvent);
        if (!event) {
            return res.status(400).json({message: "El evento no existe"})
        }
        
        try {
            const idGroup = req.params.id;
            const group = await GroupModel.findById(idGroup);
            if(!group){
                return res.status(400).json({msg:"El equipo no existe"})
            }
            const idEvent = req.params.idEvent;
            const event = await EventsModel.findById(idEvent)
            if (!event) {
                return res.status(400).json({msg:"El evento no existe"})
            }

            //Registrar evento
            await EventsModel.findByIdAndUpdate(idEvent,{
                $push:{
                    "groups":idEvent
                }
            })

            return res.status(200).json({msg:"El equipo se inscribio con exito"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Ha ocurrido un error"})
        }
    }
}