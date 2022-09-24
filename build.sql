BEGIN;

DROP TABLE IF EXISTS users,posts,comments,stars,stories CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY ,
  name VARCHAR(100),
  img TEXT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL

);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY ,
  post TEXT NOT NULL,
  img TEXT,
  user_id INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE


);
CREATE TABLE stories(
  id SERIAL PRIMARY KEY ,
  img TEXT,
  time timestamp DEFAULT now() + INTERVAL '1 day',
  timefront bigint,
  user_id INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  img TEXT,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE stars(
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts(id)ON DELETE CASCADE
);
INSERT INTO users(email,password,img,name) VALUES
 ('www','$2a$12$EHcpKHVz9O8DKEVMXE5fcux53XCu2O2UCdCU1nak.Vsfw4x8EUwqS','https://i.pinimg.com/originals/bc/27/6f/bc276ff73e30a5f50c493aeb685edb90.png','kakashi'),
 ('z@z','234','http://pa1.narvii.com/6797/6cc7aa6385483de775b0f88133f9d77bfc02a916_00.gif','hakeem'),('a@a','456','https://c.tenor.com/AdZkAyWcC9UAAAAM/itachi-itachi-uchiha.gif','habebe');
INSERT INTO posts(post,user_id,img) VALUES ('post1',1,'https://i.pinimg.com/originals/bc/27/6f/bc276ff73e30a5f50c493aeb685edb90.png'),('post2',1,NULL),('post3',2,NULL);
INSERT INTO comments(comment,user_id,post_id) VALUES ('comment1',1,1),('comment2',1,2),('comment3',1,1);
INSERT INTO stars(user_id,post_id) VALUES (1,2),(3,1),(2,1);

COMMIT;