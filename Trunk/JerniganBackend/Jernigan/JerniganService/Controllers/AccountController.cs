using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;
using JerniganService.Models;
using CaerusSoft.Jernigan.AccountManager;

namespace JerniganService.Controllers
{
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("api/Account/SignIn")]
        public SignInResponse SignIn (string username, string password)
        {
            IAccountManager accountManager = new AccountManager();

            SignInRequest request = new SignInRequest()
            {
                Password = password,
                Username = username
            };

            SignInResponse response = accountManager.SignIn(request);

            return response;
        }
        
        [HttpPost]
        [Route("api/Account/SignUp")]
        public SignUpResponse SignUp(string email, string username, string password, string passwordConfirm, string cityOfResidence)
        {
            SignUpResponse response = new SignUpResponse();
            IAccountManager accountManager = new AccountManager(); 

            if (password != passwordConfirm)
            {
                response.SignUpSuccessful = false;
                response.ErrorMessage = "Passwords do not match!";
            }

            else
            {
                SignUpRequest request = new SignUpRequest()
                {
                    Email = email,
                    CityOfResidence = cityOfResidence,
                    Password = password,
                    ConfirmPassword = passwordConfirm,
                    Username = username
                };

                response = accountManager.SignUp(request);
            }

            return response;
        }

        [HttpPost]
        [Route("api/Account/AddBio")]
        public void AddBio(int userId, string bio)
        {

        }

        [HttpPost]
        [Route("api/Account/GetUserAccountInfo")]
        public UserInfo GetUserAccountInfo (int userId)
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
