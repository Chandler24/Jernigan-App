using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Shared;

namespace CaerusSoft.Jernigan.AccountManager
{
    public class AccountManager_RealImpl : IAccountManager_RealImpl
    {
        IAccountResourceAccess m_AccountResourceAccess = new AccountResourceAccess.AccountResourceAccess();

        public SignInResponse SignIn(SignInRequest request)
        {
            return m_AccountResourceAccess.SignIn(request);
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            SignUpResponse response = new SignUpResponse();

            bool accountExists = m_AccountResourceAccess.AccountExists(request);

            if (!accountExists)
            {
                response = m_AccountResourceAccess.SignUp(request);
            }
            else
            {
                response.ErrorMessage = "Account already exists! Please try signing in";
                response.SignUpSuccessful = false;
            }

            return response;
        }

        public void UpdateProfile(UpdateProfileRequest request)
        {
            m_AccountResourceAccess.UpdateProfile(request);
        }
    }
}
