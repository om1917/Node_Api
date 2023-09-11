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
import { getAllappLoginDetails,appLoginDetails } from '../Controllers/loginController.js';
    


// First Approach
// router.get('/',getAllJobs);
// router.get('/',createJob);


//Second Approach
//router.route('/').get(getAllJobs).post(createJob);
router.route('/').get(getAllappLoginDetails).post(createGridData);
router.route('/:id').get(getJobById).patch(editJob).delete(deleteJob);
router.route('/login').post(appLoginDetails);
//router.route('/login').get(getAllappLoginDetails).post(appLoginDetails);


export default router;
