import Job from '../Models/jobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../ErrorHandler/customErrors.js';


export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job)
    throw new NotFoundError(`Job not found with id: ${id}`);
    res.status(StatusCodes.OK).json({ job });    
};

export const editJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!updatedJob) {
        return res.status(404).json({ message: `Job not found with id: ${id}` });
    }
    res.status(StatusCodes.OK).json({ message: 'Job Updated', updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedjob = await Job.findByIdAndDelete(id);
    if (!removedjob) {
        return res.status(404).json({ message: `Job not found with id: ${id}` });
    }
    res.status(StatusCodes.OK).json({ message: 'Job Deleted', job: removedjob });
};