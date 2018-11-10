using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.AccountManager
{
    public class AccountManager_Emulator : IAccountManager_Emulator
    {
        public SignInResponse SignIn(SignInRequest request)
        {
            return new SignInResponse()
            {
                ErrorMessage = string.Empty,
                SignInSuccessful = true
            };
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            return new SignUpResponse()
            {
                ErrorMessage = string.Empty,
                SignUpSuccessful = true
            };
        }
    }
}
