const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
app.use(cors())

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'backend_tienda_online',
  password: '%M1p0$tSQLx',
  port: 5432,
});

const getProducts = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM products", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
const createProducts = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, price } = body;
    pool.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
      [name, price],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new merchant has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const deleteProducts = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM products WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Merchant deleted with ID: ${id}`);
      }
    );
  });
};
const updateProducts = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, price } = body;
    pool.query(
      "UPDATE merchants SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts
};

