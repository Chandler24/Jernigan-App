using CaerusSoft.Jernigan.Contracts;
using CaerusSoft.Jernigan.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.JerniganResourceAccess
{
    public class JerniganResourceAccess : IJerniganResourceAccess
    {
        private readonly IJerniganResourceAccess m_JerniganResourceAccess;

        public JerniganResourceAccess()
        {
            RuntimeMode runtimeMode = Configuration.GetRuntimeMode();
            switch (runtimeMode)
            {
                case RuntimeMode.EMULATOR:
                    m_JerniganResourceAccess = JerniganObjectFactory.GetJerniganResourceAccessEmulatorProxy();
                    break;
                case RuntimeMode.REALIMPL:
                    m_JerniganResourceAccess = JerniganObjectFactory.GetJerniganResourceAccessRealImplProxy();
                    break;
                default:
                    m_JerniganResourceAccess = JerniganObjectFactory.GetJerniganResourceAccessRealImplProxy();
                    break;
            }
        }

        // TODO: Add logging
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.AddFavoriteLocation(request);
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.DeleteFavoriteLocation(request);
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.LeaveFeedback(request);
        }

        public LocationResponse [] FetchLocations()
        {
            return m_JerniganResourceAccess.FetchLocations();
        }
    }
}
