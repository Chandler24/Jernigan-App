using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.JerniganManager
{
    public class JerniganManager_Emulator : IJerniganManager_Emulator
    {
        /*   Timeline Methods   */
        public GenerateTimelineResponse [] GenerateTimeline(GenerateTimelineRequest request)
        {
            return new GenerateTimelineResponse []
            {
            };
        }


        /*   Location Management Methods   */
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            // Assume it worked
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            // Assume it worked
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            // Assume it worked
        }

        public LocationResponse [] FetchLocations()
        {
            throw new NotImplementedException();
        }
    }
}
