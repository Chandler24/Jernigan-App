using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using IronPython.Modules;

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
            Microsoft.Scripting.Hosting.ScriptEngine timelineEngine =
                IronPython.Hosting.Python.CreateEngine();


            List<string> searchPaths = new List<string>();
            searchPaths.Add(@"C:\Users\chand\AppData\Local\Programs\Python\Python37");
            searchPaths.Add(@"C:\Users\chand\AppData\Local\Programs\Python\Python37\Lib");
            searchPaths.Add(@"C:\Users\chand\AppData\Local\Programs\Python\Python37\Lib\site-packages");
            timelineEngine.SetSearchPaths(searchPaths);
            timelineEngine.ExecuteFile(@"C:\Dev\Projects\Jernigan App\Proof of Concept Code\CameronPOC\TimelineEngine.py");

            throw new NotImplementedException();
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
