using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [ServiceContract]
    public interface IJerniganManager
    {
        [OperationContract]
        TimelineCheckResponse [] TimelineCheck(GenerateTimelineRequest[] request);

        [OperationContract]
        GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request);

        [OperationContract]
        void LeaveFeedback(ManageLocationRequest request);

        [OperationContract]
        void AddFavoriteLocation(ManageLocationRequest request);

        [OperationContract]
        void DeleteFavoriteLocation(ManageLocationRequest request);
    }
}
