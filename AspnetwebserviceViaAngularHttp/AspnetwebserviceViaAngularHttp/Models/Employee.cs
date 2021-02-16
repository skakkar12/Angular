using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspnetwebserviceViaAngularHttp.Models
{
    public class Employee
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }

        public string Gender { get; set; }

        public int Salary { get; set; }

        public int DeptId { get; set; }
    }
}