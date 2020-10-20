<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * Route("/", name="index")
     * Route("/{route}", name="pages", requirements={"route"=".+"})
     */
    public function index()
    {
        return $this->render('index/index.html.twig');
    }
}
