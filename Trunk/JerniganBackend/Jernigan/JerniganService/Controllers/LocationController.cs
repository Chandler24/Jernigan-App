using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaerusSoft.Jernigan.Contracts;
using JerniganService.Models;
using CaerusSoft.Jernigan.JerniganManager;
using System.Web.Http.Results;

namespace JerniganService.Controllers
{
    public class LocationController : ApiController
    {
        // View users comments user story
        [HttpPost]
        [Route("api/Location/GetLocationInfo")]
        public LocationInfo GetLocationInfo(Guid locationId)
        {
            return new LocationInfo()
            {
                Comments = new Comment[]
                {
                    new Comment
                    {
                        Message = "Testing Message 2. This should show second.",
                        DatePosted = DateTime.Now.AddDays(-1),
                        UserId = Guid.NewGuid()
                    },
                    new Comment
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
        public void AddFavoriteLocation(int locationId, Guid userId)
        {

        }

        [HttpPost]
        [Route("api/Location/DeleteFavoriteLocation")]
        public void DeleteFavoriteLocation(int locationId, Guid userId)
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

        // Comment user story
        [HttpPost]
        [Route("api/Location/LeaveFeedback")]
        public void LeaveFeedback(Guid locationId, Guid userId, string comments, int rating)
        {

        }

        // All timeline generation user stories
        [HttpPost]
        [Route("api/Location/GenerateTimeline")]
        public JsonResult<TimelineModel> GenerateTimeline (string locationName)
        {
            IJerniganManager jerniganManager = new JerniganManager();
            GenerateTimelineRequest request = new GenerateTimelineRequest()
            {
                LocationName = locationName
            };

            GenerateTimelineResponse [] response = jerniganManager.GenerateTimeline(request);
            TimelineModel model = new TimelineModel();
            model.Info = new List<Info>();
            response = response.OrderBy(x => x.year).ToArray();

            foreach(GenerateTimelineResponse timeline in response)
            {
                if (timeline.year == null)
                {
                    model.Image = timeline.image;
                }
                else
                {
                    Info info = new Info();
                    info.Year = timeline.year;
                    info.Description = timeline.description;
                    model.Info.Add(info);
                }
            }

            return Json(model);
        }

    }
}
