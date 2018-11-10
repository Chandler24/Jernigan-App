CREATE PROCEDURE [dbo].[SignUp]
	@Username nvarchar(128),
	@Email nvarchar(128),
	@Password nvarchar(32),
	@CityOfResidence nvarchar(64)
AS
BEGIN
	INSERT INTO Users (CityOfResidence, Email, Password, UserName)
	VALUES (@CityOfResidence, @Email, @Password, @Username)
END