-- Stored SQL Procedures intended for use by Jernigan backend
-- David Portz
-- 11/9/2018

-- Select the database that will be used
USE jernigan;

-- Account Exists? --
-- Takes in a username and returns that row in DB (if exists)
-- If doesn't exist, return an empty row
drop procedure if exists `jernigan`.`AccountExists`;
DELIMITER //
CREATE PROCEDURE `jernigan`.AccountExists(IN username varchar(45))
    SELECT * FROM Users WHERE Users.UserName = username//
DELIMITER ;

-- SIGN UP --
-- Takes in username and password and stores both in DB
drop procedure if exists `jernigan`.`SignUp`;
DELIMITER //
CREATE PROCEDURE SignUp(IN username varchar(45), IN password varchar(45))
BEGIN
    INSERT INTO Users(UserName, Password) VALUES(username, password);
END //
DELIMITER ;

-- Sign In --
-- Takes in username and returns password.  The returned password will be cross-checked with
-- the password that the user entered.
drop procedure if exists `jernigan`.`SignIn`;
DELIMITER //
CREATE PROCEDURE SignIn(IN username varchar(45))
BEGIN
    SELECT Password FROM Users WHERE Users.UserName = username;
END //
DELIMITER ;

-- Leave Feedback --
-- Inserts rating (0-4) and the comment and inserts it into DB for the LocationID
drop procedure if exists `jernigan`.`LeaveFeedback`;
DELIMITER //
CREATE PROCEDURE LeaveFeedback(IN rating INT, IN comment TEXT(1024), IN locationid INT)
BEGIN
    INSERT INTO Social(Rating, Comment, Locations_LocationID) VALUES(rating, comment, locationid);
END //
DELIMITER ;
