const {model, Schema} = require('mongoose');

model.exports = model("Tickets", new Schema({
    GuildID: String,
    MemberID: String,
    TicketID: String,
    ChannelID: String,
    Closed: Boolean,
    Locked: Boolean,
    Type: String,

}));