#show databases;
USE jernigan;
#SELECT DATABASE();
#DESCRIBE users;
#DESCRIBE locations;
#DESCRIBE social;
#INSERT INTO users VALUES(5, 'user2', 'pass', 'florida', 'nothing', 'none', '2142323', 1);
#SELECT * FROM users;
#show tables;
#INSERT INTO locations VALUES(5, 1.25, 'mall', '210983942', '902839238023', 1.23);
#SELECT * FROM social;
#INSERT INTO social VALUES(5, 1.25, 5, 'excellent', 5);
#INSERT INTO Users (UserID, UserName, Password, CityofResidence, AboutMe, LocationsVisited, Picture)
#INSERT INTO Users VALUES(2 ,'pikachu', 'pass', 'Pallet Town', 'pika', 'none', '9893028038903');
#SELECT * FROM Users;

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
#CALL `jernigan`.SignUp("user3", "pass2");

-- Sign In --
-- Takes in username and returns password
drop procedure if exists `jernigan`.`SignIn`;
DELIMITER //
CREATE PROCEDURE SignIn(IN username varchar(45))
BEGIN
    SELECT Password FROM Users WHERE Users.UserName = username;
END //
DELIMITER ;
#CALL `jernigan`.SignIn("");

-- Leave Feedback --
-- Inserts rating (0-4) and the comment and inserts it into DB for the LocationID
drop procedure if exists `jernigan`.`LeaveFeedback`;
DELIMITER //
CREATE PROCEDURE LeaveFeedback(IN rating INT, IN comment TEXT(1024), IN locationid INT)
BEGIN
    INSERT INTO Social(Rating, Comment, Locations_LocationID) VALUES(rating, comment, locationid);
END //
DELIMITER ;
CALL `jernigan`.LeaveFeedback(4, "cool place", 1);

#SELECT * FROM Users;
SELECT * FROM Social;