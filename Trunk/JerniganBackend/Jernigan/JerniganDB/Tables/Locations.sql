CREATE TABLE [dbo].[Locations]
(
	[LocationId] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	[Longitude] DECIMAL(9,6) NOT NULL,
	[Latitude] DECIMAL(9,6) NOT NULL,
	[LocationName] NVARCHAR(256) NOT NULL
)
