using CaerusSoft.Jernigan.Contracts;
using CaerusSoft.Jernigan.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.AccountManager
{
    public class AccountManager : IAccountManager
    {
        private readonly IAccountManager m_AccountManager;

        public AccountManager()
        {
            RuntimeMode runtimeMode = Configuration.GetRuntimeMode();
            switch (runtimeMode)
            {
                case RuntimeMode.EMULATOR:
                    m_AccountManager = JerniganObjectFactory.GetAccountManagerEmulatorProxy();
                    break;
                case RuntimeMode.REALIMPL:
                    m_AccountManager = JerniganObjectFactory.GetAccountManagerRealImplProxy();
                    break;
                default:
                    m_AccountManager = JerniganObjectFactory.GetAccountManagerRealImplProxy();
                    break;
            }
        }

        public SignInResponse SignIn(SignInRequest request)
        {
            return m_AccountManager.SignIn(request);
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            return m_AccountManager.SignUp(request);
        }

        public void UpdateProfile(UpdateProfileRequest request)
        {
            m_AccountManager.UpdateProfile(request);
        }
    }
}
