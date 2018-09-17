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
        public GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request)
        {
            return new GenerateTimelineResponse
            {
                Timeline = "Willy Wonka's chocolate Factory was founded in 1945 in the wake of WWII. In 1976 Wonka discovered the Oompa Loompas and gave them refuge in the Wonka Factory. In 2009 Willy Wonka hosted a Hunger Games-esque Battle Royale to decide the new owner of the Wonka Factory, the winner of which was named Charlie."
            };
        }

        public TimelineCheckResponse [] TimelineCheck(GenerateTimelineRequest[] request)
        {
            return new TimelineCheckResponse []
            {
                new TimelineCheckResponse
                {
                    LocationAddress = "123 Candy Cane Way",
                    LocationName = "Willy Wonkas Chocolate Factory",
                    TimelineAvailable = true
                },
                new TimelineCheckResponse
                {
                    LocationAddress = "151 Pegasus Ln",
                    LocationName = "King Arthur's Castle",
                    TimelineAvailable = false
                }
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
    }
}
