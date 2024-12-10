import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema
export const UserSchemaValidate = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    date_of_birth: Joi.date().required(),
    education: Joi.string().required(),
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
    interests: Joi.array().items(Joi.string()).required(), // Added interests validation
});

// Creating an interface
interface IUser {
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    education: string;
    phone_number: string;
    password: string;
    interests: string[]; // Added interests
}

// User Schema
const userSchema = new Schema<IUser>({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    interests: {
        type: [String], // Array of strings
        required: true,
    },
});

// Creating a model
export const User = model<IUser>('Users', userSchema);
