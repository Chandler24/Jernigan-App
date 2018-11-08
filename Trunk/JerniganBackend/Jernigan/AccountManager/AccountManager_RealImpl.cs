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

        public bool AccountExists(SignUpRequest request)
        {
            return m_AccountResourceAccess.AccountExists(request);
        }

        public SignInResponse SignIn(SignInRequest request)
        {
            return m_AccountResourceAccess.SignIn(request);
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            return m_AccountResourceAccess.SignUp(request);
        }
    }
}
