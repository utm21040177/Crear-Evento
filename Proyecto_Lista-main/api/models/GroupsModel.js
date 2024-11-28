import { Schema,model } from "mongoose";

const GroupSchema = new Schema([
    {
        name:{
            type:String,
            required:true   
        }
    },{
        participantsID:[{
            //type:Schema.Types.ObjectId,
        }
        ]
    },{
        leader:{
            type:Schema.Types.ObjectId
        }
    },{
        round: {
            type: Number,
            default:0
        }
    },{
        grades: [
               // type: Schema.Types.ObjectId,
        ]
    }
])

export const GroupModel = model("groups",GroupSchema)