using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using CaerusSoft.Jernigan.Shared;

namespace CaerusSoft.Jernigan.JerniganManager
{
    public class JerniganManager : IJerniganManager
    {
        private readonly IJerniganManager m_JerniganManager;

        // Grab the configuration of the Jernigan Manager
        public JerniganManager()
        {
            RuntimeMode runtimeMode = Configuration.GetRuntimeMode();
            switch (runtimeMode)
            {
                case RuntimeMode.EMULATOR:
                    m_JerniganManager = JerniganObjectFactory.GetJerniganEmulatorProxy();
                    break;
                case RuntimeMode.REALIMPL:
                    m_JerniganManager = JerniganObjectFactory.GetJerniganManagerRealImplProxy();
                    break;
                default:
                    m_JerniganManager = JerniganObjectFactory.GetJerniganManagerRealImplProxy();
                    break;
            }
        }

        // TODO: Add logging
        public GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request)
        {
            return m_JerniganManager.GenerateTimeline(request);
        }

        public TimelineCheckResponse[] TimelineCheck(GenerateTimelineRequest[] request)
        {
            return m_JerniganManager.TimelineCheck(request);
        }
    }
}
