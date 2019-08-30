const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  const Item = mongoose.model('Clothes',ItemSchema);