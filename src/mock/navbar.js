import { lazy, Suspense } from "react";
import useId from "../hooks/useId";

const HomePage = lazy(() => import("../pages/Home"));
const NewsPage = lazy(() => import("../pages/News"));
const NewPage = lazy(() => import("../pages/New"));
const DiscountPage = lazy(() => import("../pages/Discount"));
const BooksPage = lazy(() => import("../pages/Knigi"));
const GadjetsPage = lazy(() => import("../pages/Phone-Gadjet"));

export const nav_data = [
  {
    id: useId,
    item: "11.11",
    path: "/home",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    id: useId,
    item: "Новости",
    path: "/news",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <NewsPage />
      </Suspense>
    ),
  },
  {
    id: useId,
    item: "Новинки",
    path: "/new",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <NewPage />
      </Suspense>
    ),
  },
  {
    id: useId,
    item: "Скидки",
    path: "/discount",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <DiscountPage />
      </Suspense>
    ),
  },
  {
    id: useId,
    item: "Книги",
    path: "/knigi",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <BooksPage />
      </Suspense>
    ),
  },
  {
    id: useId,
    item: "Телефоны и гаджеты",
    path: "/telefon-i-gadjet",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <GadjetsPage />
      </Suspense>
    ),
  },
];

export default nav_data;
