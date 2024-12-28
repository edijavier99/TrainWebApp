import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
// import { Blog } from "./views/Blog";
// import { Admin } from "./views/Admin";
// import { SingleArticle } from "./views/SingleArticle";
import Home from "@/public/Home";
// import injectContext from "./store/appContext";
// import { Process } from "./views/Process";
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { About } from "./views/About";

// const stripePromise = loadStripe('tu_clave_publica_de_stripe');
import MainLayout from "./mainLayout";
import DashboardLayout from "./dashboardLayout";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import AdminClients from "@/components/dashboard/Clients";
import ProgressAnalytics from "@/components/dashboard/ProgessAnalytics";
import Profile from "@/components/dashboard/Profile";
import Appointments from "@/components/dashboard/Appointments";
import Blog from "@/public/Blog";
import ArticleView from "@/public/Article";
import ArticleDashboard from "@/components/dashboard/Articles";
import ArticleForm from "@/components/forms/CreateArticleForm";
import AboutUs from "@/public/AboutUs";
import BookingCalendar from "@/components/calendar/BookingCalendar";
import WelcomeIntro from "@/private/BookingProcess/WelcomeIntro";
import { Toaster } from "@/components/ui/toaster";

const Layout = () => {

    return (
        <div>
            <BrowserRouter>
                <Toaster />

                <ScrollToTop>

                    {/* <Elements stripe={stripePromise}> */}
                        <Routes>
                        <Route element={<MainLayout />}>
                                <Route element={<Home/>} path="/" />
                                <Route element={<Blog/>} path="blog/" />
                                <Route element={<AboutUs/>} path="about-me/" />
                                <Route element={<ArticleView/>} path="blog/article/:str" />
                                <Route element={<WelcomeIntro />} path="booking/" />
                                <Route element={<BookingCalendar />} path="calendar/" />

                            </Route>
                            <Route element={<DashboardLayout />}>
                                <Route element={<ProgressAnalytics />} path="progress/" />
                                <Route element={<AdminDashboard />} path="dashboard/" />
                                <Route element={<AdminClients />} path="clients/" />
                                <Route element={<Profile />} path="profile/" />
                                <Route element={<Appointments />} path="appointments/" />
                                <Route element={<ArticleDashboard />} path="articles/" />
                                <Route element={<ArticleForm />} path="article/create/" />

                            </Route>
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    {/* </Elements> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default Layout;