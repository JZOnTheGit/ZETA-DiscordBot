const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const muteSchema = mongoose.Schema(
  {
    userId: reqString,
    guildId: reqString,
    reason: reqString,
    staffId: reqString,
    
    
    current: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('mutes-testing', muteSchema)
