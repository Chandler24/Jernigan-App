using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Contracts
{
    [ServiceContract]
    public interface IAccountResourceAccess
    {
        [OperationContract]
        bool AccountExists(SignUpRequest request);

        [OperationContract]
        SignUpResponse SignUp(SignUpRequest request);

        [OperationContract]
        SignInResponse SignIn(SignInRequest request);
    }
}
