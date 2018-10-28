using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using CaerusSoft.Jernigan.JerniganManager;

namespace TestClient
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Press <ENTER> to test the Timeline Generation");
            Console.ReadLine();

            GenerateTimelineRequest[] generateTimelineCheck = new GenerateTimelineRequest[]
            {
                new GenerateTimelineRequest
                {
                    LocationAddress = "123 Candy Cane Way",
                    LocationName = "Stanford University"
                },
                new GenerateTimelineRequest
                {
                    LocationAddress = "",
                    LocationName = ""
                }
            };

            JerniganManager jerniganManager = new JerniganManager();
            TimelineCheckResponse [] timelineCheckResponse = jerniganManager.TimelineCheck(generateTimelineCheck);

            GenerateTimelineRequest timelineRequest = new GenerateTimelineRequest();
            foreach(TimelineCheckResponse response in timelineCheckResponse)
            {
                if (response.TimelineAvailable)
                {
                    Console.WriteLine("Timeline available for " + response.LocationName);
                    timelineRequest.LocationName = response.LocationName;
                    timelineRequest.LocationAddress = response.LocationAddress;
                }
            }

            Console.WriteLine("Requesting timeline...");
            GenerateTimelineResponse timeline = jerniganManager.GenerateTimeline(timelineRequest);
            Console.WriteLine("Please find the timeline for the location " + timelineRequest.LocationName + " below.");
            Console.WriteLine();
            Console.WriteLine(timeline.Timeline);
            Console.WriteLine();
            Console.WriteLine("Press <ENTER> to end");
            Console.ReadLine();
        }
    }
}
