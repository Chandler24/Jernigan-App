using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Proxies
{
    public class AccountManager_RealImplProxy : DisposableClientBase<IAccountManager_RealImpl>, IAccountManager_RealImpl
    {
        public SignInResponse SignIn(SignInRequest request)
        {
            return base.Channel.SignIn(request);
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            return base.Channel.SignUp(request);
        }
    }
}
