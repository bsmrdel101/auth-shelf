const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  pool.query(`
  SELECT * FROM "item";
  `).then((dbres) => res.send(dbres.rows))
    .catch((dberror) => {
      console.log('Opps you messed up DB error', dberror);
      res.sendStatus(500)
    })  
});

/**
 * Add an item for the logged in user to the shelf, this is the AUTH Object req.user
 */

router.post('/', (req, res) => {
  
  const sqlText =`INSERT INTO "item" ("description", "image_url", "user_id")
	VALUES ($1, $2, $3);`
  const sqlValues = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ]
console.log('this is sqlValues', sqlValues);
   pool.query(sqlText, sqlValues)
    .then((dbres) => res.sendStatus(201))
    .catch((dberror) => {
      console.log('Opps you messed up DB error', dberror);
      res.sendStatus(500)
    })   
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  const sqlText =`DELETE FROM "item" WHERE "id"=$1 AND "user_id"=$2`
	
  const sqlValues = [
    req.params.id, 
    req.user.id,     
  ]
console.log('this is sqlValues', sqlValues);
   pool.query(sqlText, sqlValues)
    .then((dbres) => res.sendStatus(201))
    .catch((dberror) => {
      console.log('Opps you messed up DB error', dberror);
      res.sendStatus(500)
    })   
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
