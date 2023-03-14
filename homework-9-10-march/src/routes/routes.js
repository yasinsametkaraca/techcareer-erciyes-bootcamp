import Home from "../views/home";
import AddCategory from "../views/category/Add";
import CategoryList from "../views/category/List";
import CategoryDetail from "../views/category/Detail";
import CategoryUpdate from "../views/category/Update";


export const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/category/add',
        element:<AddCategory />
    },
    {
        path:'/categories',
        element:<CategoryList />
    },
    {
        path:'/category/update/:id',
        element:<CategoryUpdate />
    },
    {
        path:'/category/detail/:id',
        element:<CategoryDetail />
    }
]