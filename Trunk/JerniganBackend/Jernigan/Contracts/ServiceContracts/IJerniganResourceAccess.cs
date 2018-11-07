using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Contracts
{
    [ServiceContract]
    public interface IJerniganResourceAccess
    {
        [OperationContract]
        void LeaveFeedback(ManageLocationRequest request);

        [OperationContract]
        void AddFavoriteLocation(ManageLocationRequest request);

        [OperationContract]
        void DeleteFavoriteLocation(ManageLocationRequest request);

        [OperationContract]
        LocationResponse[] FetchLocations();
    }
}
