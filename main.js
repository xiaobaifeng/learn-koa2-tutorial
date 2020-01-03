const mongoose = require('mongoose');
const { Schema } = mongoose;

const app = require('./app');
const listener = require('./listener')
const config = require('./config/server');

mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }, async (err) => {
  let Group = mongoose.model(
    'Group',
    new Schema({
      name: {
        type: String,
        trim: true,
        unique: true
      }
    })
  )
  const cwb3 = await Group.findOne({ name: 'cwb3' })
  if (!cwb3) await Group.create({ name: 'cwb3' })

  listener(app, config.port)
});