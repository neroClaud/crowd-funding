use vxgroup;

INSERT INTO `vxgroup`.`category` (`name`) VALUES ('kultura');
INSERT INTO `vxgroup`.`category` (`name`) VALUES ('zivot');
INSERT INTO `vxgroup`.`category` (`name`) VALUES ('sport');

INSERT INTO `vxgroup`.`news` (`content`, `description`, `title`, `category_id`) VALUES ('sadrzaj vesti 1', 'opis vesti 1', 'vest 1', '1');
INSERT INTO `vxgroup`.`news` (`content`, `description`, `title`, `category_id`) VALUES ('sadrzaj vesti 2', 'opis vesti 2', 'vest 2 ', '2');
INSERT INTO `vxgroup`.`news` (`content`, `description`, `title`, `category_id`) VALUES ('sadrzaj vesti 3', 'opis vesti 3', 'vest 3', '3');
INSERT INTO `vxgroup`.`news` (`content`, `description`, `title`, `category_id`) VALUES ('sadrzaj vesti 4', 'opis vesti 4', 'vest 4', '3');

-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin', 'ADMINISTRATOR');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'USER');
