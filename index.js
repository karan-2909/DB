const express = require('express');
const app = express();
const PORT = 5000;
const Faculty = require("./models/facultyModels");
app.use(express.json());
require('./db')

/*app.get("/", (req, res) => {
    res.send("Hello World!.. homt good");
    j
});

app.get("/students", (req, res) => {
    res.send("Hello World!.. homeeeeeee");
    j
});

app.get("/faculty", (req, res) => {
    res.send("Hello  faculties.")
});*/

app.post('/Faculty', async (req, res) => {
    try {
        const data = req.body;
        const createdFaculty = new Faculty(data);
        await createdFaculty.save();
        res.send("Faculty created");
    } catch (error) {
        console.log(error);
    }
});

app.get('/Faculty', async (req, res) => {
    try {
        const facultyList = await Faculty.find();
        res.send(facultyList);

    } catch (error) {
        console.log(error);
    }

});
app.put('/Faculty/:id', async (req, res) => {
    try {
        const facultyId = req.params.id;
        await Faculty.updateOne({ id: facultyId }, { $set: req.body });
        res.send("Faculty updated");

    } catch (error) {
        console.log(error);
    }

});
app.delete('/Faculty/:id', async (req, res) => {
    try {
        const facultyId = req.params.id;
        await Faculty.deleteOne({ id: facultyId });
        res.send("Faculty deleted");

    } catch (error) {
        console.log(error);
    }

});

app.listen(PORT, function () {
    console.log(`Server is running on localhost:${PORT}`)
});