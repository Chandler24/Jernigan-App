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
            bool accountExists = false;
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("SignIn", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Username", request.Username)
                };
                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    accountExists = true;
                }                
            }
            return accountExists;
        }

        public SignInResponse SignIn(SignInRequest request)
        {
            bool successful = false;
            string error = string.Empty;
            int userid = -1;
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("SignIn", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Username", request.Username)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();

                SqlDataReader reader = command.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        string password = reader.GetString(0);
                        if (password == request.Password)
                        {
                            successful = true;
                            userid = reader.GetInt32(1);
                        }
                        else
                            error = "Invalid password.";
                    }
                }
                else error = "Invalid username";

            }

            SignInResponse response = new SignInResponse()
            {
                ErrorMessage = error,
                SignInSuccessful = successful,
                UserId = userid
            };

            return response;
        }

        public SignUpResponse SignUp(SignUpRequest request)
        {
            bool successful = true;
            string error = string.Empty;
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("SignUp", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@CityOfResidence", request.CityOfResidence),
                    new SqlParameter("@Password", request.Password),
                    new SqlParameter("@UserName", request.Username),
                    new SqlParameter("@Email", request.Email)
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

        public void UpdateProfile(UpdateProfileRequest request)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("UpdateProfile", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@CityOfResidence", request.CityOfResidence),
                    new SqlParameter("@UserId", request.UserId),
                    new SqlParameter("@Bio", request.Bio),
                    new SqlParameter("@Picture", request.Picture)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();
                command.ExecuteNonQuery();
            }            
        }
    }
}
