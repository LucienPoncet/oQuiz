BEGIN; 

-- CREATE TYPE user_type AS ENUM ('user', 'admin');

-- on modifie la table user pour ajouter une colonne contenant le role du user
ALTER TABLE "user" ADD COLUMN "role" VARCHAR(10) NOT NULL DEFAULT 'user';

COMMIT; 
