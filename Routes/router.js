import { Router } from 'express';
const router = Router()

import {
    getAllJobs,
    createJob,
    getJobById,
    editJob,
    deleteJob
} from '../Controllers/testController.js';

import { getAllGridData , createGridData  } from '../Controllers/gridController.js';
    


// First Approach
// router.get('/',getAllJobs);
// router.get('/',createJob);


//Second Approach
//router.route('/').get(getAllJobs).post(createJob);
router.route('/').get(getAllGridData).post(createGridData);
router.route('/:id').get(getJobById).patch(editJob).delete(deleteJob);


export default router;
