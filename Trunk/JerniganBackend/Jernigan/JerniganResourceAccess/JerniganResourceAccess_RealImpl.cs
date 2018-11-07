using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;
using System.Data.SqlClient;

namespace CaerusSoft.Jernigan.JerniganResourceAccess
{
    public class JerniganResourceAccess_RealImpl : IJerniganResourceAccess_RealImpl
    {
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("AddFavoriteLocation", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@LocationId", request.LocationId),
                    new SqlParameter("@UserId", request.UserId)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();

                int res = command.ExecuteNonQuery();
            }
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("DeleteFavoriteLocation", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@LocationId", request.LocationId),
                    new SqlParameter("@UserId", request.UserId)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();

                int res = command.ExecuteNonQuery();
            }
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("LeaveFeedback", connection);
                SqlParameter[] sqlParams = new SqlParameter[]
                {
                    new SqlParameter("@Comments", request.Comments),
                    new SqlParameter("@LocationId", request.LocationId),
                    new SqlParameter("@Rating", request.Rating),
                    new SqlParameter("@UserId", request.UserId)
                };

                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddRange(sqlParams);
                connection.Open();

                int res = command.ExecuteNonQuery();
            }
        }

        public LocationResponse [] FetchLocations()
        {
            LocationResponse[] response = new LocationResponse[4];
            
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString()))
            {
                SqlCommand command = new SqlCommand("FetchLocations", connection);
                command.Connection = connection;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                connection.Open();

                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    int rowCount = reader.GetInt32(3);
                    int count = 0;
                    response = new LocationResponse[rowCount];
                    while (reader.Read())
                    {
                        LocationResponse r = new LocationResponse
                        {
                            Latitude = reader.GetDecimal(0),
                            Longitude = reader.GetDecimal(1),
                            LocationName = reader.GetString(2)
                        };

                        response[count] = r;
                        count++;
                    }
                }             
            }

            return response;
        }
    }
}
