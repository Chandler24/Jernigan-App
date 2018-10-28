using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using IronPython.Modules;
using System.Net.Http; 

namespace CaerusSoft.Jernigan.JerniganManager
{
    public class JerniganManager_RealImpl : IJerniganManager_RealImpl
    {
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            throw new NotImplementedException();
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            throw new NotImplementedException();
        }

        public GenerateTimelineResponse GenerateTimeline(GenerateTimelineRequest request)
        {
            var content = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("data", request.LocationName)
            });


            HttpClient client = new HttpClient();
            var d = client.PostAsync("http://localhost:9999/", content);

            GenerateTimelineResponse response = new GenerateTimelineResponse() {
               Timeline = d.Result.ToString()
            };

            return response;
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            throw new NotImplementedException();
        }

        public TimelineCheckResponse [] TimelineCheck(GenerateTimelineRequest[] request)
        {
            return new TimelineCheckResponse[]
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


    }
}
