import express from 'express';
import { MovieRoutes } from '../modules/movie/movie.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { SubCategoryRoutes } from '../modules/subCategory/subCategory.route';
import { LinkRoutes } from '../modules/link/link.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/movies",
    routes: MovieRoutes
  },
  {
    path: "/categories",
    routes:CategoryRoutes
  },
  {
    path: "/subCategories",
    routes:SubCategoryRoutes
  },
  {
    path: "/links",
    routes:LinkRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
