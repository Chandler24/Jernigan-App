using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.AccountResourceAccess
{
    public class AccountResourceAccess_Emulator : IAccountResourceAccess_Emulator
    {
        public bool AccountExists(SignUpRequest request)
        {
            return false;
        }

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
