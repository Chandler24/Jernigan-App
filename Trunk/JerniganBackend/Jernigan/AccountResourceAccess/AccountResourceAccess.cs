using CaerusSoft.Jernigan.Contracts;
using CaerusSoft.Jernigan.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.AccountResourceAccess
{
    public class AccountResourceAccess : IAccountResourceAccess
    {
        private readonly IAccountResourceAccess m_AccountResourceAccess;

        public AccountResourceAccess()
        {
            RuntimeMode runtimeMode = Configuration.GetRuntimeMode();
            switch (runtimeMode)
            {
                case RuntimeMode.EMULATOR:
                    m_AccountResourceAccess = JerniganObjectFactory.GetAccountResourceAccessEmulatorProxy();
                    break;
                case RuntimeMode.REALIMPL:
                    m_AccountResourceAccess = JerniganObjectFactory.GetAccountResourceAccessRealImplProxy();
                    break;
                default:
                    m_AccountResourceAccess = JerniganObjectFactory.GetAccountResourceAccessRealImplProxy();
                    break;
            }
        }

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
