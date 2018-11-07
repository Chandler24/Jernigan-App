CREATE PROCEDURE [dbo].[DeleteFavoriteLocation]
	@param1 int = 0,
	@LocationId INT,
	@UserId UNIQUEIDENTIFIER
AS
BEGIN
	UPDATE	Users_Locations
	SET		IsDeleted = 1
	WHERE	LocationId = @LocationId AND
			UserId = @UserId
END
