const mongoose =require('../mainDB') 
const videoschema = new mongoose.Schema({
      userid:{
          type:String,
          allowNull: false,
      },
      description:{
        type:String,
      allowNull: false,
      },
      videoUrl:{
          type:String,
        allowNull: false,
      },
      thumbnailUrl:{
        type:String,
      allowNull: false,
    },
    videoType:{
        type:String,
      allowNull: false,
    },
    videoLength:{
      type:String,
      allowNull:false
    },
    hashTag:{
      type:String,
    },
    NoOfLike:{
type:String,
    },
    NoOfComment:{
type:String,
    },
     date:{
      type:Date
  }
})
const videomodel = mongoose.model('video', videoschema);
module.exports = videomodel;
