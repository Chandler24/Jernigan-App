using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;
using JerniganService.Models;

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
        
        [HttpPost]
        [Route("api/Account/SignUp")]
        public SignUpResponse SignUp(string username, string password, string cityOfResidence)
        {
            return new SignUpResponse()
            {
                ErrorMessage = string.Empty,
                SignUpSuccessful = true
            };
        }

        [HttpPost]
        [Route("api/Account/AddBio")]
        public void AddBio(Guid userId, string bio)
        {

        }

        [HttpPost]
        [Route("api/Account/GetUserAccountInfo")]
        public UserInfo GetUserAccountInfo (Guid userId)
        {
            return new UserInfo
            {
                Bio = "This is the user's bio",
                Location = "Orlando, Fl",
                ProfilePhoto = new byte [256],
                Username = "jsmith@gmail.com",
                VisitedLocations = new LocationInfo[]
                {
                    new LocationInfo
                    {
                        LocationName = "Favorite Location 1",
                        LocationId = Guid.NewGuid(),
                        Comments = new Comment[]
                        {
                            new Comment
                            {
                                Message = "Testing Comment",
                                DatePosted = DateTime.Now,
                                UserId = Guid.NewGuid()
                            }
                        }
                    }
                } 
            };
        }

    }
}
