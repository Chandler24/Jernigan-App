using Microsoft.VisualStudio.TestTools.UnitTesting;
using CaerusSoft.Jernigan.AccountResourceAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.AccountResourceAccess.Tests
{
    [TestClass()]
    public class AccountResourceAccessTests
    {
        private readonly AccountResourceAccess_Emulator m_AccountResourceAccess = new AccountResourceAccess_Emulator();

        [TestMethod()]
        public void AccountExistsTest()
        {
            // Arrange
            SignUpRequest request = new SignUpRequest()
            {
                ConfirmPassword = "Test",
                Password = "Test",
                Username = "test@test.com"
            };

            // Act
            bool accountExists = m_AccountResourceAccess.AccountExists(request);

            // Assert
            Assert.AreEqual(false, accountExists);
        }

        [TestMethod()]
        public void SignInTest()
        {
            // Arrange
            SignInRequest request = new SignInRequest()
            {
                Password = "Test",
                Username = "test@test.com"
            };

            // Act
            SignInResponse response = m_AccountResourceAccess.SignIn(request);

            // Assert
            Assert.AreEqual(true, response.SignInSuccessful);
        }

        [TestMethod()]
        public void SignUpTest()
        {
            // Arrange
            SignUpRequest request = new SignUpRequest()
            {
                ConfirmPassword = "Test",
                Password = "Test",
                Username = "test@test.com"
            };

            // Act
            SignUpResponse response = m_AccountResourceAccess.SignUp(request);

            // Assert
            Assert.AreEqual(true, response.SignUpSuccessful);
        }
        
        [TestMethod()]
        public void UpdateProfileTest()
        {
            // Arrange
            UpdateProfileRequest request = new UpdateProfileRequest()
            {
                Bio = "Testing bio",
                CityOfResidence = "Orlando",
                Picture = "Test",
                UserId = 0
            };

            // Act 
            m_AccountResourceAccess.UpdateProfile(request);
        }
    }
}