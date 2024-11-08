import express from 'express';
import { MovieRoutes } from '../modules/movie/movie.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { SubCategoryRoutes } from '../modules/subCategory/subCategory.route';
import { LinkRoutes } from '../modules/link/link.route';
import { RegionRoutes } from '../modules/region/region.route';
import { UserRoutes } from '../modules/user/user.route';
import { FeaturedRoutes } from '../modules/featured/featured.route';

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
  },
  {
    path: "/regions",
    routes:RegionRoutes
  },
  {
    path: "/users",
    routes:UserRoutes
  },
  {
    path: "/features",
    routes:FeaturedRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
