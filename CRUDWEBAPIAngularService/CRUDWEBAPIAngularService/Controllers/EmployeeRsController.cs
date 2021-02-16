using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CRUDWEBAPIAngularService.Models;

namespace CRUDWEBAPIAngularService.Controllers
{
    public class EmployeeRsController : ApiController
    {
        private WebApiSamplesEntities db = new WebApiSamplesEntities();

        // GET: api/EmployeeRs
        public IQueryable<EmployeeR> GetEmployeeRs()
        {
            return db.EmployeeRs;
        }

        // GET: api/EmployeeRs/5
        [ResponseType(typeof(EmployeeR))]
        public IHttpActionResult GetEmployeeR(int id)
        {
            EmployeeR employeeR = db.EmployeeRs.Find(id);
            if (employeeR == null)
            {
                return NotFound();
            }

            return Ok(employeeR);
        }

        // PUT: api/EmployeeRs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeR(int id, EmployeeR employeeR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeR.EmpNo)
            {
                return BadRequest();
            }

            db.Entry(employeeR).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeRExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EmployeeRs
        [ResponseType(typeof(EmployeeR))]
        public IHttpActionResult PostEmployeeR(EmployeeR employeeR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EmployeeRs.Add(employeeR);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employeeR.EmpNo }, employeeR);
        }

        // DELETE: api/EmployeeRs/5
        [ResponseType(typeof(EmployeeR))]
        public IHttpActionResult DeleteEmployeeR(int id)
        {
            EmployeeR employeeR = db.EmployeeRs.Find(id);
            if (employeeR == null)
            {
                return NotFound();
            }

            db.EmployeeRs.Remove(employeeR);
            db.SaveChanges();

            return Ok(employeeR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeRExists(int id)
        {
            return db.EmployeeRs.Count(e => e.EmpNo == id) > 0;
        }
    }
}