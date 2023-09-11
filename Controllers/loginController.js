import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../ErrorHandler/customErrors.js';
import loginDetails from '../Models/loginModel.js';


export const appLoginDetails = async (req, res) => {
    const loginData = await loginDetails.create(req.body);
    res.status(StatusCodes.CREATED).json({ loginData });
};

export const getAllappLoginDetails = async (req, res) => {
    const records = await loginDetails.find({});
    console.log('Hiii')
    res.status(StatusCodes.OK).json({ records });
};
