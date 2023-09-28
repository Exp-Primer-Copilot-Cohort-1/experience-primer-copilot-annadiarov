// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Read the comments.json file
// 4. Return the comments as JSON

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    // 3. Read the comments.json file
    const fs = require('fs');
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
        // 4. Return the comments as JSON
        res.json(JSON.parse(data));
    });
});

// 5. Create a route for POST /comments
app.post('/comments', (req, res) => {
    // 6. Read the comments.json file
    const fs = require('fs');
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
        // 7. Add a new comment to the comments.json file
        const comments = JSON.parse(data);
        comments.push(req.body);
        // 8. Write the comments.json file
        fs.writeFile('./comments.json', JSON.stringify(comments), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            // 9. Return the comments as JSON
            res.json(comments);
        });
    });
});

// 10. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    // 11. Read the comments.json file
    const fs = require('fs');
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
        // 12. Delete the comment with the given id
        const comments = JSON.parse(data);
        const filteredComments = comments.filter(comment => comment.id !== parseInt(req.params.id));
        // 13. Write the comments.json file
        fs.writeFile('./comments.json', JSON.stringify(filteredComments), err => {