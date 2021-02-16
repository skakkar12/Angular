using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using LatetWebserivceAngularCRUD.Models;

namespace LatetWebserivceAngularCRUD
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

      [WebMethod]
      public void GetAllEmployees()
        {
            List<Employee> LstEmployee = new List<Employee>();
            string cs = ConfigurationManager.ConnectionStrings["TestEmployee"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spGetEmployee", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Employee emp = new Employee();
                    emp.EmpId = Convert.ToInt32(rdr["EmpNo"]);
                    emp.EmpName = rdr["EmpName"].ToString();
                    emp.Salary = Convert.ToInt32(rdr["Salary"]);
                    emp.DeptName =rdr["DeptName"].ToString();
                    emp.Designation = rdr["Designation"].ToString();
                    LstEmployee.Add(emp);
                }

                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(LstEmployee));


            }

        }
    }
}
