
// // // const express = require('express');
// // // const cors = require('cors');
// // // const getAllStudentRouter = require('./route/getAllStudentRoutes'); 
// // // const getStudentById = require('./route/getStudentByIdRoutes');


// // // const app = express();

// // // app.use(express.json());
// // // app.use(cors());
// // // app.use('/api', getAllStudentRouter);
// // // app.use('/:id',getStudentById);

// // // module.exports = app;



// // const express = require('express');
// // const cors = require('cors');
// // const getAllStudentRouter = require('./route/getAllStudentRoutes'); 
// // const getStudentByIdRouter = require('./route/getStudentByIdRoutes');
// // const createStudentRouter = require('./route/createStudentRoutes');


// // const app = express();

// // app.use(express.json());
// // app.use(cors());

// // // Set up API routes
// // app.use('/api', getAllStudentRouter);  // Routes like /api/students

// // app.use('/api', getStudentByIdRouter);  // Routes like /api/students/:id

// // app.use('/api',createStudentRouter);

// // module.exports = app;


const express = require('express');
const cors = require('cors');
const getAllStudentRouter = require('./route/getAllStudentRoutes'); 
const getStudentByIdRouter = require('./route/getStudentByIdRoutes');
const createStudentRouter = require('./route/createStudentRoutes');
const deleteStudentRouter = require('./route/deleteStudentRoutes');
const udpateStudentRouter = require('./route/updateStudentRoutes');

const app = express();
 
app.use(express.json());
app.use(cors());

// Set up API routes
app.use('/api/students', getAllStudentRouter);  // Handles routes like /api/students (e.g., GET /api/students)
app.use('/api/students', getStudentByIdRouter);  // Handles routes like /api/students/:id (e.g., GET /api/students/123)
app.use('/api/students', createStudentRouter);  // Handles routes like /api/students (e.g., POST /api/students)
app.use('/api/students',deleteStudentRouter);
app.use('/api/students',udpateStudentRouter)
module.exports = app;




// ===============================================================================

// const express = require('express');
// const cors = require('cors');
// const getAllStudentRouter = require('./route/getAllStudentRoutes');
// const getStudentByIdRouter = require('./route/getStudentByIdRoutes');
// const createStudentRouter = require('./route/createStudentRoutes');
// const deleteStudentRouter = require('./route/deleteStudentRoutes');
// const updateStudentRouter = require('./route/updateStudentRoutes');

// const app = express();

// app.use(express.json());
// app.use(cors());

// // Set up API routes
// app.use('/api/students', getAllStudentRouter);  // Handles routes like /api/students (e.g., GET /api/students)
// app.use('/api/students', getStudentByIdRouter);  // Handles routes like /api/students/:id (e.g., GET /api/students/123)
// app.use('/api/students', createStudentRouter);  // Handles routes like /api/students (e.g., POST /api/students)
// app.use('/api/students', deleteStudentRouter);  // Handles routes like /api/students/:id (e.g., DELETE /api/students/123)
// app.use('/api/students', updateStudentRouter);  // Handles routes like /api/students/:id (e.g., PUT /api/students/123)

// module.exports = app;

