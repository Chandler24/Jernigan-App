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
                    m_JerniganManager = JerniganObjectFactory.GetJerniganManagerEmulatorProxy();
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
        public GenerateTimelineResponse [] GenerateTimeline(GenerateTimelineRequest request)
        {
            return m_JerniganManager.GenerateTimeline(request);
        }

        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganManager.AddFavoriteLocation(request);
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganManager.DeleteFavoriteLocation(request);
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            m_JerniganManager.LeaveFeedback(request);
        }

        public LocationResponse[] FetchLocations()
        {
            return m_JerniganManager.FetchLocations();
        }
    }
}
