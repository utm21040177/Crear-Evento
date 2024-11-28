import { Schema,model } from "mongoose";

const GradesSchema = new Schema([
    {
        groupID: {
            type: Schema.Types.ObjectId,
            required: true
        },
        round: {
            type: Number,
            required: true
        },
        eventID: {
            type: Schema.Types.ObjectId,
            required: true
        },
        grade: [
            {
                metricID:{
                    type: Schema.Types.ObjectId,
                    required: true
                },
                grade:{
                    type: Number,
                    required: true
                },
                judgeID:{
                     type: Schema.Types.ObjectId,
                     required: true
                }
            }
        ]
    }
]);

export const CalificationsModel = model('grades', GradesSchema);