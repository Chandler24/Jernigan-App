using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.JerniganResourceAccess
{
    public class JerniganResourceAccess_Emulator : IJerniganResourceAccess_Emulator
    {
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            // Assume it worked
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            // Assume it worked
        }

        public LocationResponse[] FetchLocations()
        {
            return new LocationResponse[]
            {
                new LocationResponse()
                {
                    Latitude = 81.2001m,
                    Longitude = 28.6024m,
                    LocationName = "University of Central Florida"
                },
                new LocationResponse()
                {
                    Latitude = 81.5639m,
                    Longitude = 28.3852m,
                    LocationName = "Walt Disney World"
                }
            };
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            // Assume it worked
        }
    }
}
