CREATE DATABASE Lins_Catering_Services;

USE Lins_Catering_Services;

USE acsm_6b56686aed5c72c;

/*---------------------Admin table--------------*/

CREATE TABLE admin (
  Admin_id INT(255) NOT NULL AUTO_INCREMENT,
  User_name VARCHAR(32) NOT NULL,
  Pass_word VARCHAR(32) DEFAULT NULL,
  PRIMARY KEY (Admin_id,User_name)
);

/*----------------Base Table--------------------*/

CREATE TABLE reservation (
  Reservation_id INT(11) NOT NULL,
  Package_id VARCHAR(5) DEFAULT NULL,
  CusName VARCHAR(70) DEFAULT NULL,
  Contact_num VARCHAR(12) DEFAULT NULL,
  Date_of_event DATE DEFAULT NULL,
  Address VARCHAR(255) DEFAULT NULL,
  City VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (Reservation_id),
  KEY Package_id (Package_id),
  KEY City (City),
  CONSTRAINT reservation_ibfk_1 FOREIGN KEY (Package_id) REFERENCES package (Package_id),
  CONSTRAINT reservation_ibfk_2 FOREIGN KEY (City) REFERENCES city (City)
);


/*--------------Parent Table----------------*/
CREATE TABLE package (
  Package_id VARCHAR(5) NOT NULL,
  Description VARCHAR(255) DEFAULT NULL,
  Price DECIMAL(10,0) DEFAULT NULL,
  PRIMARY KEY (Package_id)
);

CREATE TABLE city (
  City VARCHAR(20) NOT NULL,
  PRIMARY KEY (City)
);

/*-----------Insert Data --------*/

INSERT INTO City VALUES ('Caloocan');
INSERT INTO City VALUES ('Las Pinas');
INSERT INTO City VALUES ('Makati');
INSERT INTO City VALUES ('Malabon');
INSERT INTO City VALUES ('Mandaluyong');
INSERT INTO City VALUES ('Manila');
INSERT INTO City VALUES ('Muntinlupa');
INSERT INTO City VALUES ('Navotas');
INSERT INTO City VALUES ('Paranaque');
INSERT INTO City VALUES ('Pasay');
INSERT INTO City VALUES ('Pasig');
INSERT INTO City VALUES ('Pateros*');
INSERT INTO City VALUES ('Quezon City');
INSERT INTO City VALUES ('San Juan');
INSERT INTO City VALUES ('Taguig');
INSERT INTO City VALUES ('Valenzuela');


INSERT INTO Package VALUES ('D-A','Debut Package A, Menu Beef with Oyster Sauce Mixed Vegetables Chicken Lollipop or chicken with bbq sauce Pancit(Bihon/Miki Bihon) White Rice Buko Pandan Ice tea bottomless',200);
INSERT INTO Package VALUES ('D-B','Debut Package B, Menu Roasted Beef with Mushroom Sauce Breaded Fish Fillet with Tartar Sauce Chicken Lollipop or Chicken with bbq sauce Pancit (BIhon/Miki Bihon) White Rice Buko Pandan Ice Tea bottomless
',250);
INSERT INTO Package VALUES ('D-C','Debut Package C, Menu Braised Beef Roulade Chicken Ballontine with Cream of Mushroom Bread Fish Finger with Tartar sauce Roasted pork with mango sauce Mixed Vegetable Pancit White Rice Fruit Salad Ice Tea bottomless',300);
INSERT INTO Package VALUES ('W-A','Wedding Package A, Menu( Beef or Pork,Chicken,Veg.,Pasta ,Dessert,Drnks)',45000);
INSERT INTO Package VALUES ('W-B','Wedding Package B, Menu (Beef,Chicken,Fish,Veg.,Pasta,Dessert,Drinks)',45000);
INSERT INTO Package VALUES ('W-C','Wedding Package C, Menu(Beef,Chicken,Fish,Pork,Veg.,Pasta,Dessert.Drinks) ',50000);


/*---------------View-----------------------------*/

SELECT	R.Reservation_id , P.Description , P.Price , R.CusName , R.Contact_num , R.Date_of_event , R.Address , R.City ,DATE_FORMAT(R.Date_issue ,'%b %d %Y %h:%i %p')
FROM reservation R
INNER JOIN package P
ON R.Package_id = P.Package_id
ORDER BY 9 ;






