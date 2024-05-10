const Employee = require("../service/user.service");

module.exports = {
  TestUserHealth: (req, res) => {
    try {

      res.status(200).json({
        message: "successfully entering test user handler part",
        data: [
          {
            name: "fairuz",
            occupation: "software engineer - backend",
            location: "gresik",
          },
          {
            name: "afiz",
            occupation: "student / teacher",
            location: "gresik",
          },
        ],
      });

      return;
    } catch (error) {
      res.status(500).json({
        message: "server busy",
        data: null,
        err: error.message,
      });
      return;
    }
  },

  GetEmployee: (req, res) => {
    const employee = new Employee();
    const getEmp = employee.GetEmployee();

    return res.status(getEmp.code).json(getEmp);
  },

  CreateEmployee: (req, res) => {
    const employee = new Employee();

    const ce = employee.CreateNewEmployee(req.body, req.body.roles);

    return res.status(ce.code).json(ce);
  },

  UpdateEmployee: (req, res) => {
    const employee = new Employee();

    const ue = employee.UpdateEmployee(req.param.id, req.body, req.body.roles);

    return res.status(ue.code).json(ue);
  },

  DeleteEmployee: (req, res) => {
    const employee = new Employee();

    const ue = employee.DeleteEmployee(req.param.id, req.body.roles);

    return res.status(ue.code).json(ue);
  },
};
