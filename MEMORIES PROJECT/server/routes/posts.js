// import { getPost } from '../controllers/post';
const getPost = require('../controllers/post');

const express = require('express');

const router = express.Router();
// const Connect = require('../models/postsSchema');

router.get('/', getPost);
router.post('/', createPostt);
router.update('/', updatePost);
router.delete('/', deletePost);
 
export default router;