import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../ErrorHandler/customErrors.js';
import gridData from '../Models/gridDataModel.js';

export const getAllGridData = async (req, res) => {
    const records = await gridData.find({});
    res.status(StatusCodes.OK).json({ records });
};


export const createGridData = async (req, res) => {
    const records = await gridData.create(req.body);
    res.status(StatusCodes.CREATED).json({ records });
};
