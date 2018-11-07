CREATE PROCEDURE [dbo].[AddFavoriteLocation]
	@LocationId INT,
	@UserId UNIQUEIDENTIFIER
AS
BEGIN
	INSERT INTO Users_Locations(LocationId, UserId)
	VALUES(@LocationId, @UserId)
END