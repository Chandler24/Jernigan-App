CREATE PROCEDURE [dbo].[FetchLocations]
AS
BEGIN
	SELECT Latitude, Longitude, LocationName, COUNT(*) FROM Locations
END