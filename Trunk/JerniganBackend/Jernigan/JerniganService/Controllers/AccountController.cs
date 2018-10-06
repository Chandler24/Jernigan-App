using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;

namespace JerniganService.Controllers
{
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("api/Account/SignIn")]
        public SignInResponse SignIn (string username, string password)
        {
            return new SignInResponse()
            {
                ErrorMessage = string.Empty,
                SignInSuccessful = true
            };
        } 
    }
}
