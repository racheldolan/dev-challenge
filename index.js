const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Express running on port ${PORT}`));

module.exports = app;
