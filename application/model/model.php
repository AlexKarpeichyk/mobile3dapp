<?php

class Model {

    public $dbhandle;

    public function __construct() {
        $dsn = 'sqlite:application/db/db3d.db';

        try {

            $this->dbhandle = new PDO($dsn, 'user', 'password', array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ));

        } catch(PDOException $e) {

            print new Exception($e->getMessage());

        } 
    }

    public function dbCreateTable() {
        
        try {

            $this->dbhandle->exec("CREATE TABLE MODEL_INFO (Id INTEGER PRIMARY KEY, modelTitle TEXT, modelDescription TEXT)");
            return "MODEL_INFO table created.";

        } catch(PDOException $e) {

            print new Exception($e->getMessage());

        }

        $this->dbhandle = NULL;

    }

    public function dbInsertData() {
        
        try {

            $this->dbhandle->exec(
                "INSERT INTO MODEL_INFO(Id, modelTitle, modelDescription)
                    VALUES (1, 'Arkham Game Series Batarang', 
                        'A high-tech version of the classic batarang. One of the first items available in all the games. Can be controlled remotely within a certain range.'); ",

                "INSERT INTO MODEL_INFO(Id, modelTitle, modelDescription)
                    VALUES (2, 'The Dark Knight Franchise Batarang', 
                        'A simple, classic, single piece batarang, shaped like the Bat symbol from The Dark Knight movie.'); ",

                "INSERT INTO MODEL_INFO(Id, modelTitle, modelDescription)
                    VALUES (3, 'Custom Batarang', 
                        'An interesting, custom batarang of unspecified origiin (random picture on the internet...). Has unfolding mechanical wings, the shape resembles that of the batarang from 90s Batman Beyond cartoon.'); ",

                "INSERT INTO MODEL_INFO(Id, modelTitle, modelDescription)
                    VALUES (4, 'Batman v Superman Batarang', 
                        'Batarang featured in the DCs Batman v Sueprman: Dawn of Justice (mediocre) movie. Big and bulcky, like the Batman himself.'); ");

            return "Inserted data into MODEL_INFO table.";

        } catch(PDOException $e) {

            print new Exception($e->getMessage());

        }

        $this->dbhandle = NULL;

    }

    public function dbGetInfoById($id) {
        
        try {
            
            $stmt = $this->dbhandle->prepare("SELECT modelTitle, modelDescription FROM MODEL_INFO WHERE Id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();

            $info = $stmt->fetch();
            
            return $info;

        } catch(PDOException $e) {

            print new Exception($e->getMessage());

        }

    }
}

?>