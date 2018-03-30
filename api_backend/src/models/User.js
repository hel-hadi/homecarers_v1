import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

// add uniqueness and email validation to email field
const schema = new mongoose.Schema(
    {
   email: { type: String,
            required: true,
            lowercase: true,
            index: true,
            unique: true
        },
        name: { type: String,
                required: true
        },
        firstName: { type: String,
            required: true
        },
        type: { type: String,
            required: true
        },
        profession: { type: String,
            required: true
        },
        num: { type: String,
            required: true
        },
        passwordHash: { type: String, required: true },
        confirmed: { type: Boolean, default: false },
        confirmationToken: { type: String, default: "" }
   },
   { timestamps: true }
);


schema.methods.setInfo = function setInfo(name, firstName, type, profession, num) {
    this.name = name;
    this.firstName = firstName;
    this.type = type;
    this.profession = profession;
    this.num = num;
};

schema.methods.isValidPassword = function isValidPassword(password) {
   return bcrypt.compareSync(password, this.passwordHash);
};


schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
};

schema.methods.setConfirmationToken = function setConfirmationToken() {
    this.confirmationToken = this.generateJWT();
};

schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
    return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

schema.methods.generateJWT = function generateJWT() {
   return jwt.sign(
       {
           email: this.email,
           confirmed: this.confirmed
       },
       process.env.JWT_SECRET
   );
};

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

schema.plugin(uniqueValidator, { message: "This email is already taken"});

export default mongoose.model('User', schema);