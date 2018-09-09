using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.JerniganManager
{
    public class JerniganManager_RealImpl : IJerniganManager_RealImpl
    {
        public GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request)
        {
            throw new NotImplementedException();
        }

        public TimelineCheckResponse [] TimelineCheck(GenerateTimelineRequest[] request)
        {
            throw new NotImplementedException();
        }
    }
}
