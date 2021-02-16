using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LatetWebserivceAngularCRUD.Models
{
    public class Employee
    {
        public int EmpId { get; set; }

        public string EmpName { get; set; }

        public int Salary { get; set; }

        public string DeptName { get; set; }

        public string Designation { get; set; }
    }
}