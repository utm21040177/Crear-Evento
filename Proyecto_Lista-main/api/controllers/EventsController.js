import { EventModel } from "../models/EventsModel.js";

export const createEvent = async(req,res)=>{
        try {

            //Validar que metricas es un arrglo
            if (!Array.isArray(req.body.metrics)) {
                return res.status(400).json({msg:"Metricas no es un arrgeglo"})
            }
            //Validar que tiene al menos una metrica
            if (!(req.body.metric.length > 0)) {
                return res.status(400).json({msg:"Metricas estan vacias"})
            }
             // Validar que descripcion si sea string
            const invalidMetrics = req.body.metrics.filter(metric => metric.description.length === 0 || metric.max_points === 0)
            if (invalidMetrics.length > 0) {
            return res.status(400).json({message: "Metricas invalidas", invalidMetrics})
            }
            //Validar que descripcion y mex puntos existen
            const negativePointsMetrics = req.body.metrics.filter(metric => metric.max_points < 0);
            if (negativePointsMetrics.length > 0) {
            return res.status(400).json({message: "Los puntos máximos deben ser positivos", negativePointsMetrics})
            }
            const event = {
                name: req.body.name,
                metrics: req.body.metrics,
                maxRound: req.body.maxRound
            }

            await EventModel.create(event);
            return res.status(200).json({msg:"Evento registrado"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Evento no registrado, algo malio sal"})
        }
    }


export const changeStatus = async(req,res)=> {
    try {
        
    } catch (error) {
        
    }
}

export const changeRound = async(req, res)=>{
    try {
        const idEvent = req.params.id;
        const event = await EventModel.findById(idEvent);
        if (!event) {
            return res.status(400).json({msg:"Evento no encontrado"})
        }
        const teamsPerRound = req.query.maxTeams ? req.query.maxTeams : 5;
        //Traer las calificaciones por grupo
        const {groups} = event;
        for (const group of groups) {
            const {grades} = await GradesModel.findById({idEvent: event._id, idGroup: event._id});
            //Calificar por metrica
            const alreadyCheked = [];
            for (const grade of grades) {
                const filteredGrades = grades.filter(item=>{grade.idMetric === item.idMetric && !alreadyCheked.includes(grade.idMetric)});
                console.log(filteredGrades);
                let gradePerMetric = 0 ;
                if (filteredGrades.length > 0) {
                    const gradePerMetric = filteredGrades.reduce((a,b)=>{a.grade = b.grade});    
                }
                
                if (!alreadyCheked.includes(grade.idMetric)) {
                    alreadyCheked.push(filteredGrades[0].idMetric)
                
                }
                
                console.log(gradePerMetric);   
            }
        } 
    } catch (error) {
        return res.status(500).json({msg:"Error al cambiar la ronda"})
    }
}