CREATE TABLE [dbo].[Social]
(
	[SocialId] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	[LocationId] UNIQUEIDENTIFIER NOT NULL,
	[UserId] INT NOT NULL,
	[Rating] INT NOT NULL,
	[Comment] NVARCHAR(MAX), 
    CONSTRAINT [FK_Social_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([UserId]), 
    CONSTRAINT [FK_Social_Locations] FOREIGN KEY ([LocationId]) REFERENCES [Locations]([LocationId]),
)
