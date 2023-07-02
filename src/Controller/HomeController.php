<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\ArticleRepository;


class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(Request $request, ArticleRepository $productRepository): Response
    {
        $searchTerm = $request->query->get('q');
        $products = $productRepository->search(
            $searchTerm
        );

        return $this->render('home/index.html.twig', [
            'is_searching' => $searchTerm ? true : false,
            'products' => $products,
            'searchTerm' => $searchTerm
        ]);
    }
}
