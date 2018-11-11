CREATE PROCEDURE [dbo].[UpdateProfile]
	@CityOfResidence nvarchar(128),
	@UserId int,
	@Bio nvarchar(512),
	@Picture nvarchar(max)
AS
BEGIN
	UPDATE	Users
	SET		CityOfResidence = @CityOfResidence,
			AboutMe = @Bio,
			Picture = @Picture
END