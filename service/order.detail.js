const uuid = require("uuid");
const templateResponse = require("../helper/response.helper");
const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

class OrderDetail {
  GetOrderDetails() {
    try {
      const resp = templateResponse.response;
      resp.code = 200;
      resp.data = null;
      resp.error = null;
      resp.message = "Successfully retrieved order details";

      return resp;
    } catch (error) {
      const resp = templateResponse.response;
      resp.code = 500;
      resp.data = null;
      resp.error = error.message;
      resp.message = "Internal Server Error";

      return resp;
    }
  }

  CreateNewOrderDetail(request, roles) {
    const resp = templateResponse.response;

    try {
      if (roles !== "admin") {
        resp.code = 401;
        resp.data = null;
        resp.error = "Unauthorized";
        resp.message = "Unauthorized";

        return resp;
      }

      const data = {
        order_detail_id: uuid.v4(),
        order_id: request.order_id,
        product_id: request.product_id,
        quantity: request.quantity,
        price: request.price,
        created_at: formattedDate,
      };

      resp.code = 200;
      resp.data = data;
      resp.error = null;
      resp.message = "Order detail created successfully";

      return resp;
    } catch (error) {
      resp.code = 500;
      resp.data = null;
      resp.error = error.message;
      resp.message = "Internal Server Error";

      return resp;
    }
  }

  UpdateOrderDetail(id, request, roles) {
    const resp = templateResponse.response;

    try {
      if (roles !== "admin") {
        resp.code = 401;
        resp.data = null;
        resp.error = "Unauthorized";
        resp.message = "Unauthorized";
        return resp;
      }

      if (!id || typeof id !== "string" || !request) {
        resp.code = 400;
        resp.data = null;
        resp.error = "Bad Request";
        resp.message = "Invalid ID or request body";
        return resp;
      }

      const updatedData = {
        product_id: request.product_id,
        quantity: request.quantity,
        price: request.price,
      };

      resp.code = 200;
      resp.data = updatedData;
      resp.error = null;
      resp.message = `Order detail ${id} updated successfully`;

      return resp;
    } catch (error) {
      resp.code = 500;
      resp.data = null;
      resp.error = error.message;
      resp.message = "Internal Server Error";

      return resp;
    }
  }

  DeleteOrderDetail(id, roles) {
    const resp = templateResponse.response;

    try {
      if (roles !== "admin") {
        resp.code = 401;
        resp.data = null;
        resp.error = "Unauthorized";
        resp.message = "Unauthorized";

        return resp;
      }

      if (!id || typeof id !== "string") {
        resp.code = 400;
        resp.data = null;
        resp.error = "Bad Request";
        resp.message = "Invalid ID";
        return resp;
      }

      resp.code = 200;
      resp.data = null;
      resp.error = null;
      resp.message = `Order detail ${id} deleted successfully`;

      return resp;
    } catch (error) {
      resp.code = 500;
      resp.data = null;
      resp.error = error.message;
      resp.message = "Internal Server Error";

      return resp;
    }
  }
}

module.exports = OrderDetail;
