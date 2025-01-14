const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ message: 'Contact saved!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
