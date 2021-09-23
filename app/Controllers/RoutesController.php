<?php

namespace App\Controllers;

use Core\BaseController;
use Core\Container;
use Core\Page;

class RoutesController extends BaseController
{
	private $user;
	private $page;

	public function __construct()
	{
		parent::__construct();
		$this->user = Container::getModel("User");
		$pageData = [
			"pagetitle"=>"Post Design",
			"author"=>"Victor Alves",
			"description"=>"Description",
			"cache"=>$this->cache()
		];
		$this->page = new Page([],"website/",$pageData);
	}

	public function index(){
		$this->page->render("index",[]);
	}

}