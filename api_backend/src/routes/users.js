import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';
import { sendConfirmationEmail } from '../mailer';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.user);

   const { email, password, name, firstName, type, profession, num} =  req.body.user;
   const user = new User({ email });
   console.log(name);
   user.setPassword(password);
    user.setInfo(name, firstName, type, profession, num);
    user.setConfirmationToken();
   user.save()
       .then(userRecord => {
          sendConfirmationEmail(userRecord);
          res.json({ user: userRecord.toAuthJSON()})
       })
       .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;