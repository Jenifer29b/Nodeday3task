import express from 'express'
import cors from 'cors'
import connectDB from './Database/DBConfig.js'
import studroutes from './Routers/student.router.js'
import mtroutes from './Routers/mentor.router.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/stud', studroutes);
app.use('/api/ment', mtroutes);


connectDB();


app.get('/', (req, res) => {
       res.status(200).send('App is working')
})






app.listen( process.env.PORT , () => {
      console.log("Server is running on port :" , process.env.PORT)
}) 