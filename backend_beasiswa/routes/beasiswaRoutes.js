// import express from 'express';
// import {
//   getAllBeasiswa,
//   getBeasiswaById,
//   createBeasiswa,
//   updateBeasiswa,
//   deleteBeasiswa,
//   getCategories,
// } from '../controllers/beasiswaController.js';
// import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const express = require('express');
const {
    getAllBeasiswa,
    getBeasiswaById,
    createBeasiswa,
    updateBeasiswa,
    deleteBeasiswa,
    getCategories,
} = require('../controllers/beasiswaController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllBeasiswa);
router.get('/categories', getCategories);
router.get('/:id', authMiddleware, getBeasiswaById);
router.post('/', authMiddleware, adminMiddleware, createBeasiswa);
router.put('/:id', authMiddleware, adminMiddleware, updateBeasiswa);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBeasiswa);

// export default router;
module.exports = router;
