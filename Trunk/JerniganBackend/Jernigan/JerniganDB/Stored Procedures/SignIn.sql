CREATE PROCEDURE [dbo].[SignIn]
	@Username nvarchar(128)
AS
BEGIN
	SELECT [Password], UserId FROM Users WHERE UserName = @Username
END