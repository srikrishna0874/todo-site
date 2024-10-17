const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const todo_model = require('./models/Todo.js');



app.use("/public", express.static("public"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/todo').then((res) => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log('error in connecting mongodb ', err);
});

app.listen(3000, () => {
    console.log('server is running');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.post('/add_task', async (req, res) => {
    console.log('body is: ');
    console.log(req.body);
    const task = req.body['Add Task'];
    console.log(task);
    const new_task_obj = new todo_model({ taskName: task });
    await new_task_obj.save();
    console.log('task inserted');
    res.redirect('/');
});


app.post('/edit_task', async (req, res) => {

});

app.post('/delete_task', async (req, res) => {
    try {
        const task=re.body['Edit Task'];
    }
    catch (e) {
        console.log(e);
        
    }
});

app.get('/get_tasks', async (req, res) => {
    try {
        const allTodos = await todo_model.find({});
        console.log('all todos are ', allTodos);
        res.status(200).json(allTodos);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'An error occurred while fetching todos' });
    }

});



