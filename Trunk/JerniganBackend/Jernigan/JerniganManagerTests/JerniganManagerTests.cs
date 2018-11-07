using Microsoft.VisualStudio.TestTools.UnitTesting;
using CaerusSoft.Jernigan.JerniganManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.JerniganManager.Tests
{
    [TestClass()]
    public class JerniganManagerTests
    {
        private readonly JerniganManager_Emulator m_JerniganManager = new JerniganManager_Emulator();

        [TestMethod()]
        public void GenerateTimelineTest()
        {
            // Setup
            GenerateTimelineRequest request = new GenerateTimelineRequest()
            {
                LocationAddress = "Test Location Address",
                LocationName = "Test Location Name"
            };

            // Invoke
            GenerateTimelineResponse [] response = m_JerniganManager.GenerateTimeline(request);
            
        }     

        [TestMethod()]
        public void AddFavoriteLocationTest()
        {
            // Arrange
            ManageLocationRequest request = new ManageLocationRequest()
            {
                Comments = "Testing Comment",
                LocationId = "TestingLocationId",
                Rating = RatingEnum.FiveStars,
                UserId = Guid.NewGuid()
            };

            // Invoke
            m_JerniganManager.AddFavoriteLocation(request);

            // Verify is handled by exceptions
        }

        [TestMethod()]
        public void DeleteFavoriteLocationTest()
        {
            // Arrange
            ManageLocationRequest request = new ManageLocationRequest()
            {
                Comments = "Testing Comment",
                LocationId = "TestingLocationId",
                Rating = RatingEnum.FiveStars,
                UserId = Guid.NewGuid()
            };

            // Invoke
            m_JerniganManager.DeleteFavoriteLocation(request);

            // Verify is handled by exceptions
        }

        [TestMethod()]
        public void LeaveFeedbackTest()
        {
            // Arrange
            ManageLocationRequest request = new ManageLocationRequest()
            {
                Comments = "Testing Comment",
                LocationId = "TestingLocationId",
                Rating = RatingEnum.FiveStars,
                UserId = Guid.NewGuid()
            };

            // Invoke
            m_JerniganManager.LeaveFeedback(request);

            // Verify is handled by exceptions
        }
    }
}