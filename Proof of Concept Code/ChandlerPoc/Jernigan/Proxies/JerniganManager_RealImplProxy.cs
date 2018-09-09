using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Proxies
{
    public class JerniganManager_RealImplProxy : DisposableClientBase<IJerniganManager_RealImpl>, IJerniganManager_RealImpl
    {
        public GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request)
        {
            return base.Channel.GenerateTimeline(request);
        }

        public TimelineCheckResponse [] TimelineCheck(GenerateTimelineRequest[] request)
        {
            return base.Channel.TimelineCheck(request);
        }
    }
}
