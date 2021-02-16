using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MVC5_Angular_Api2_CRUD.Models;

namespace MVC5_Angular_Api2_CRUD.Controllers
{
    public class ManageEmployeController : ApiController
    {
        SamplesEntities obj = new SamplesEntities();

        [HttpGet]
        [Route("api/ListAll")]
        public IEnumerable<ReadAllEmployee_Result> ListAllEmployee(string emp_Name, string country, string managerName)
        {
            return obj.ReadAllEmployee(emp_Name, country, managerName).AsEnumerable();
        }

        [HttpGet]
        public void AddNewEmployee(string emp_Name, string email, string country, string managerName)
        {
            obj.ADDNewEmployee(emp_Name, email, country,1, managerName);
        }

        [HttpGet]
        public void UpdateEmployee(int? emp_ID, string emp_Name, string email, string country, string managerName)
        {
            obj.UpdateEmployee(emp_ID, emp_Name, email, country, managerName);
        }

        [HttpGet]
        public void deleteEmployee(int emp_ID)
        {
            obj.DeleteEmployee(emp_ID);
            obj.SaveChanges();
        }
    }
}
