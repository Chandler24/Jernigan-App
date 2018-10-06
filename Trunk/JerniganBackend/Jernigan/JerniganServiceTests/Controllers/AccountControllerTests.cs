using Microsoft.VisualStudio.TestTools.UnitTesting;
using JerniganService.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using System.Web;

namespace JerniganService.Controllers.Tests
{
    [TestClass()]
    public class AccountControllerTests
    {
        private readonly AccountController m_AccountController = new AccountController();

        [TestMethod()]
        public void SignInTest()
        {
            // Arrange
            string username = "test@test.com";
            string password = "test141#";

            // Act
            SignInResponse response = m_AccountController.SignIn(username, password);

            // Assert
            Assert.AreEqual(true, response.SignInSuccessful);
        }
    }
}