﻿CREATE TABLE [dbo].[Users]
(
	[UserId] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	[UserName] NVARCHAR(128) NOT NULL,
	[Password] NVARCHAR(128) NOT NULL,
	[CityOfResidence] NVARCHAR(256) NOT NULL,
	[AboutMe] NVARCHAR(1024) NOT NULL,
	[Picture] INT NULL
)