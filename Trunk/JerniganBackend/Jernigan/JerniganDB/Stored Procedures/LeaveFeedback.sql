CREATE PROCEDURE [dbo].[LeaveFeedback]
	@LocationId INT,
	@UserId UNIQUEIDENTIFIER,
	@Comments NVARCHAR(256) = NULL,
	@Rating INT = NULL
AS
BEGIN
	INSERT INTO Social (UserId, LocationId, Comment, Rating)
	VALUES (@UserId, @LocationId, @Comments, @Rating)
END