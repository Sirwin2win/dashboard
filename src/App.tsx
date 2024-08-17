import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import "@fontsource/sora"
import MainLayout from "./Layouts/MainLayout"
import ProductLayout from "./Layouts/ProductLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AccountLogin from "./components/account/AccountLogin"
// import AccountSignUp from "./components/account/AccountSignUp"
import PasswordResetEmail from "./components/passwordReset/PasswordResetEmail"
import SignUp from "./pages/SignUp"
import Products from "./pages/Products"
import Dashboard from "./pages/Dashboard"
import Order from "./pages/Order"
import Request from "./pages/Request"
import Customers from "./pages/Customers"
import Messages from "./pages/Messages"
import DashboardLayout from "./Layouts/DashboardLayout"
import ResetCodeSent from "./pages/ResetCodeSent"
import AddProducts from "./pages/products/AddProducts"
import AddNew from "./components/button/AddNew"
import EditProduct from "./pages/products/EditProduct"
import ProductGallery from "./components/product/ProductGallery"
import Profile from "./pages/Profile"
import Appearance from "./pages/Appearance"
import Billings from "./pages/Billings"
import Notifictions from "./pages/Notifictions"
import Password from "./pages/Password"
import SettingsLayout from "./Layouts/SettingsLayout"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Individual Routes */}
        <Route path="about" element={<About />} />
        <Route path="edit-product" element={<EditProduct />} />
        <Route path="product-gallery" element={<ProductGallery />} />
        <Route path="sign-in" element={<AccountLogin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="reset-code-sent" element={<ResetCodeSent />} />
        <Route path="password-reset" element={<PasswordResetEmail />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Dashboard Route */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<Products />} />
          <Route path="requests" element={<Request />} />
          <Route path="customers" element={<Customers />} />
          <Route path="messages" element={<Messages />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="add-products" element={<AddNew />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route path="my-profile" element={<Profile />} />
            <Route path="billing" element={<Billings />} />
            <Route path="security" element={<Password />} />
            <Route path="notification" element={<Notifictions />} />
            <Route path="appearance" element={<Appearance />} />
          </Route>
        </Route>
        ,
      </>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
