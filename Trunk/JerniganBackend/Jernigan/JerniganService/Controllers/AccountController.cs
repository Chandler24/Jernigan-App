using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;
using JerniganService.Models;
using CaerusSoft.Jernigan.AccountManager;
using System.Web.Http.Results;

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
        
        // Account creation user story
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

        // Save basic information user story
        [HttpPost]
        [Route("api/Account/UpdateProfile")]
        public bool UpdateProfile(int userId, string image, string bio, string cityOfResidence)
        {
            bool result = true;
            try
            {
                IAccountManager accountManager = new AccountManager();
                UpdateProfileRequest request = new UpdateProfileRequest()
                {
                    Bio = bio,
                    Picture = image,
                    CityOfResidence = cityOfResidence,
                    UserId = userId
                };
                accountManager.UpdateProfile(request);
            }
            catch (Exception ex)
            {
                result = false;
            }
            return result;
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
