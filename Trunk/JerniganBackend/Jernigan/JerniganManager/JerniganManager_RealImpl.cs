using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using IronPython.Modules;
using Newtonsoft.Json;
using System.Net.Http; 

namespace CaerusSoft.Jernigan.JerniganManager
{
    public class JerniganManager_RealImpl : IJerniganManager_RealImpl
    {
        IJerniganResourceAccess m_JerniganResourceAccess = new JerniganResourceAccess.JerniganResourceAccess();

        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.AddFavoriteLocation(request);
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.DeleteFavoriteLocation(request);
        }

        public GenerateTimelineResponse [] GenerateTimeline(GenerateTimelineRequest request)
        {    
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("data", request.LocationName);
            var d = client.GetAsync("http://localhost:8080/");
            var r = d.Result.Content.ReadAsStringAsync();
            GenerateTimelineResponse [] timelines = JsonConvert.DeserializeObject<GenerateTimelineResponse[]>(r.Result);
            return timelines;
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            m_JerniganResourceAccess.LeaveFeedback(request);
        }

        public LocationResponse[] FetchLocations()
        {
            return m_JerniganResourceAccess.FetchLocations();
        }
    }
}
