using Microsoft.VisualStudio.TestTools.UnitTesting;
using CaerusSoft.Jernigan.AccountManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.AccountManager.Tests
{
    [TestClass()]
    public class AccountManagerTests
    {
        private readonly AccountManager_Emulator m_AccountManager = new AccountManager_Emulator();

        [TestMethod()]
        public void SignIn()
        {
            // Arrange
            SignInRequest request = new SignInRequest()
            {
                Password = "Test",
                Username = "test@test.com"
            };

            // Act
            SignInResponse response = m_AccountManager.SignIn(request);

            // Assert
            Assert.AreEqual(true, response.SignInSuccessful);
        }

        [TestMethod()]
        public void SignUp()
        {
            // Arrange
            SignUpRequest request = new SignUpRequest()
            {
                ConfirmPassword = "Test",
                Password = "Test",
                Username = "test@test.com"
            };

            // Act
            SignUpResponse response = m_AccountManager.SignUp(request);

            // Assert
            Assert.AreEqual(true, response.SignUpSuccessful);
        }
    }
}