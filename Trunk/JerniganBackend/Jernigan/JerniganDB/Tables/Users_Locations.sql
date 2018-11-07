CREATE TABLE [dbo].[Users_Locations]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[UserId] UNIQUEIDENTIFIER NOT NULL,
	[LocationId] UNIQUEIDENTIFIER NOT NULL, 
	[IsDeleted] BIT DEFAULT(0) NOT NULL,
    CONSTRAINT [FK_Users_Locations_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([UserId]),
    CONSTRAINT [FK_Users_Locations_Locations] FOREIGN KEY ([LocationId]) REFERENCES [Locations]([LocationId]),
)
