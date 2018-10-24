using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;
using JerniganService.Models;

namespace JerniganService.Controllers
{
    public class LocationController : ApiController
    {
        [HttpPost]
        [Route("api/Location/GetLocationInfo")]
        public LocationInfo GetLocationInfo(Guid locationId)
        {
            return new LocationInfo()
            {
                Comments = new Comment[]
                {
                    new Models.Comment
                    {
                        Message = "Testing Message 2. This should show second.",
                        DatePosted = DateTime.Now.AddDays(-1),
                        UserId = Guid.NewGuid()
                    },
                    new Models.Comment
                    {
                        Message = "Testing Message 1. This should so first",
                        DatePosted = DateTime.Now,
                        UserId = Guid.NewGuid()
                    }
                }
            };
        }

        [HttpPost]
        [Route("api/Location/AddFavoriteLocation")]
        public void AddFavoriteLocation(Guid locationId, Guid userId)
        {

        }

        [HttpPost]
        [Route("api/Location/DeleteFavoriteLocation")]
        public void DeleteFavoriteLocation(Guid locationId, Guid userId)
        {

        }

        [HttpPost]
        [Route("api/Location/GetFavoriteLocations")]
        public LocationInfo [] GetFavoriteLocations(Guid userId)
        {
            return new LocationInfo[]
            {
                new LocationInfo
                {
                    LocationName = "Favorite Location 1",
                    LocationId = Guid.NewGuid(),
                    Comments = new Comment[]
                    {
                        new Comment
                        {
                            Message = "Testing Comment",
                            DatePosted = DateTime.Now,
                            UserId = Guid.NewGuid()
                        }
                    }
                }
            };
        }

        [HttpPost]
        [Route("api/Location/LeaveFeedback")]
        public void LeaveFeedback(Guid locationId, Guid userId, string comments, int rating)
        {

        }

        [HttpPost]
        [Route("api/Location/GetAvailableTimelines")]
        public TimelineCheckResponse[] GetAvailableTimelines(string longitude, string latitude)
        {
            return new TimelineCheckResponse[]
            {
                new TimelineCheckResponse
                {
                    LocationId = Guid.NewGuid(),
                    LocationAddress = "123 Candy Cane Way",
                    LocationName = "Willy Wonka's Chocolate Factory",
                    TimelineAvailable = true
                },
                new TimelineCheckResponse
                {
                    LocationId = Guid.NewGuid(),
                    LocationAddress = "149 All Hallows Haunt",
                    LocationName = "Samhain's Hill",
                    TimelineAvailable = false
                },
                new TimelineCheckResponse
                {
                    LocationId = Guid.NewGuid(),
                    LocationAddress = "917 Nightmare Lane",
                    LocationName = "Camp Crystal Lake",
                    TimelineAvailable = true
                }
            };
        }

        [HttpPost]
        [Route("api/Location/GenerateTimeline")]
        public GenerateTimelineResponse GenerateTimeline (string locationName)
        {
            return new GenerateTimelineResponse()
            {
                Timeline = "This is an example of a timeline for the given location"
            };
        }

    }
}
