using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace CaerusSoft.Jernigan.AccountResourceAccess
{
    public class AccountResourceAccess_RealImpl : IAccountResourceAccess_RealImpl
    {
        public bool AccountExists(SignUpRequest request)
        {
            throw new NotImplementedException();
        }

        public SignInResponse SignIn(SignInRequest request)
        {
            throw new NotImplementedException();
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            bool successful = true;
            string error = string.Empty;
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("AddUser", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@AboutMe", request.AboutMe),
                    new SqlParameter("@CityOfResidence", request.CityOfResidence),
                    new SqlParameter("@Password", request.Password),
                    new SqlParameter("@UserName", request.Username),
                    new SqlParameter("@UserId", Guid.NewGuid()),
                    new SqlParameter("@Picture", request.Photo)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();

                int res = command.ExecuteNonQuery();
                if (res == 0)
                {
                    successful = false;
                    error = "An error occurred when signing up";
                }
            }

            return new SignUpResponse
            {
                SignUpSuccessful = successful,
                ErrorMessage = error
            };
        }
    }
}
