using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Proxies
{
    public class AccountResourceAccess_RealImplProxy : DisposableClientBase<IAccountResourceAccess_RealImpl>, IAccountResourceAccess_RealImpl
    {
        public bool AccountExists(SignUpRequest request)
        {
            return base.Channel.AccountExists(request);
        }

        public SignInResponse SignIn(SignInRequest request)
        {
            return base.Channel.SignIn(request);
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            return base.Channel.SignUp(request);
        }

        public void UpdateProfile(UpdateProfileRequest request)
        {
            base.Channel.UpdateProfile(request);
        }
    }
}
