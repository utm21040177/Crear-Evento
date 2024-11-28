import { EventModel } from "../models/EventsModel";
import { GradesModel } from "../models/GradesModel";

//Crear calificaciones 
//Devolverlas

export default {
    createGrade: async (req,res) => {
        try {
            const groupID = req.params.groupID;
            const group = await GradesModel.findById(groupID);
            if (!group) {
                return res.status.json({msg:"Grupo no encontrado"})

            }
            
            const round = req.body.round;

            if (!round) {
                return res.status.json({msg:"La ronda no es valida"})
            }

            const eventID = req.params.eventID;
            const event = await EventModel.findById(eventID);
            if (!event) {
                return res.status.json({msg:"Evento no encontrado"})
            }

            if (!event.groups.includes(groupID)) {
                return res.status.json({msg:"No esta el grupo en este evento"})
            }

            //Validar que la ronda no tenga calificacion
            //Filtro para traer las calificaciones de este evento
            const gradesFromBd = await GradesModel.findOne({eventID:event._id, round:round, groupID:group._id});
            gradesFromBd.grades.filter((grade)=>{
                grade.judgeID == req.body.judgeID;
            })

            //Calificacioes
            const grades = req.body.grades;


        } catch (error) {
            
        }
    }
}