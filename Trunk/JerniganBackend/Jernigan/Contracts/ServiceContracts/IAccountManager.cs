using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Contracts
{
    [ServiceContract]
    public interface IAccountManager
    {
        [OperationContract]
        SignUpResponse SignUp(SignUpRequest request);

        [OperationContract]
        SignInResponse SignIn(SignInRequest request);

        [OperationContract]
        void UpdateProfile(UpdateProfileRequest request);
    }
}
