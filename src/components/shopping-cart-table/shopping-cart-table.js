import React from "react";

import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <td>1</td>
          <td>Site Reliability Engineering</td>
          <td>2</td>
          <td>40 руб.</td>
          <td>
            <button className="btn btn-outline-danger">
              <i className="fa fa-trash-o"></i>
            </button>
            <button className="btn btn-outline-success">
              <i className="fa fa-plus-circle"></i>
            </button>
            <button className="btn btn-outline-warning">
              <i className="fa fa-minus-circle"></i>
            </button>
          </td>
        </tbody>
      </table>
      <div className="total">Total: $210</div>
    </div>
  );
};

export default ShoppingCartTable;
