// Layouts
import { HeaderOnly } from '../components/Layout';
import { NoHeader } from '../components/Layout';
import { Polo } from '../pages/Product';
import { Shirt } from '../pages/Product';
import { Pants } from '../pages/Product';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import DeliverInfo from '../pages/DeliverInfo';
import Policy from '../pages/Policy';
import Contact from '../pages/Contact';
import Thanks from '../pages/Thanks';
import ConfirmOrder from '../pages/ConfirmOrder';
import AdminProducts from '../pages/Admin/Products';
import PoloDetail from '../pages/Product/Polo/PoloDetail';
import ShirtDetail from '../pages/Product/Shirt/ShirtDetail';
import PantsDetail from '../pages/Product/Pants/PantsDetail';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Story from '../pages/Story';
import Rules from '../pages/Rules';
import Information from '../pages/Information';

// Routes ko đăng nhập vẫn vào dc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/following', component: Following },
    { path: '/blog', component: Blog },
    { path: '/story', component: Story },
    { path: '/rules', component: Rules },
    { path: '/information', component: Information },
    { path: '/product', component: Product },
    { path: '/product/polo', component: Polo, type: Polo },
    { path: '/product/polo/:id', component: PoloDetail },
    { path: '/product/shirt', component: Shirt, type: Shirt },
    { path: '/product/shirt/:id', component: ShirtDetail },
    { path: '/product/pants', component: Pants, type: Pants },
    { path: '/product/pants/:id', component: PantsDetail },
    // {path: '/product_detail', component: ProductDetail},
    { path: '/login', component: Login, layout: NoHeader },
    { path: '/register', component: Register, layout: NoHeader },
    { path: '/forget_password', component: ForgetPassword, layout: HeaderOnly },
    { path: '/deliverInfo', component: DeliverInfo },
    { path: '/policy', component: Policy },
    { path: '/contact', component: Contact, layout: HeaderOnly },
    { path: '/thanks', component: Thanks, layout: NoHeader },
    { path: '/confirm_order', component: ConfirmOrder, layout: HeaderOnly },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/adminproduct', component: AdminProducts, layout: NoHeader },
    // -----
];

// Routes phải đăng nhập mới vào dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
