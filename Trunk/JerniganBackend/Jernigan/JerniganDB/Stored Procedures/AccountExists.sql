CREATE PROCEDURE [dbo].[AccountExists]
	@Username nvarchar(128)
AS
BEGIN
	SELECT * FROM Users WHERE UserName = @Username
END