<?php

    class Controller {

        public $load;
        public $model;

        function __construct($pageMethod = null) {
            $this->load = new Load();
            $this->model = new Model();
            $this->$pageMethod();
        }

        function home() {
            $this->load->view('home', null);
        }

        function arkham() {
            $data = $this->model->dbGetInfoById(1);
            $this->load->view('arkham', $data);
        }

        function knight() {
            $data = $this->model->dbGetInfoById(2);
            $this->load->view('knight', $data);
        }

        function custom() {
            $data = $this->model->dbGetInfoById(3);
            $this->load->view('custom', $data);
        }

        function bvs() {
            $data = $this->model->dbGetInfoById(4);
            $this->load->view('bvs', $data);
        }

        function apiCreateTable() {
            $data = $this->model->dbCreateTable();
            $this->load->view('viewMessage', $data);
        }

        function apiInsertData() {
            $data = $this->model->dbInsertData();
            $this->load->view('viewMessage', $data);
        }
    }
