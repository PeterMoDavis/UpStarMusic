// Todo: Create Artist Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: String,
  genre: String,
  website: String,
  newWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "album",
    },
  ],
});

const Artist = mongoose.model("artist", ArtistSchema);

module.exports = Artist;
