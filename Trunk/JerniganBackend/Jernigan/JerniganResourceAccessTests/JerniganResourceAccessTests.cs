using Microsoft.VisualStudio.TestTools.UnitTesting;
using CaerusSoft.Jernigan.JerniganResourceAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.JerniganResourceAccess.Tests
{
    [TestClass()]
    public class JerniganResourceAccessTests
    {
        private readonly JerniganResourceAccess_Emulator m_JerniganResourceAccess = new JerniganResourceAccess_Emulator();

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

            // Act
            m_JerniganResourceAccess.AddFavoriteLocation(request);

            // Assert is handled by exceptions
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

            // Act
            m_JerniganResourceAccess.DeleteFavoriteLocation(request);

            // Assert is handled by exceptions
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

            // Act
            m_JerniganResourceAccess.LeaveFeedback(request);

            // Assert is handled by exceptions
        }
    }
}