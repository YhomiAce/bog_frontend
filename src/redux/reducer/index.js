import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";
import AlertReducer from "./AlertReducer";
import  CartReducer  from "./CartReducer";
import UserReducer from "./UsersReducer";
import OrderReducer from "./OrderReducer";
import ProjectReducer from "./ProjectReducer";
import AdminProjectsReducer from "./ProjectsReducer";
import PostReducer from "./PostReducer";
import NotificationReducer from "./NotificationReducer";
import AnnouncementReducer from "./AnnouncementReducer";
import ServiceCategory from "./ServiceCategory";
import SubscriptionReducer from "./SubscriptionReducer";

const rootReducer = combineReducers({
    alert: AlertReducer,
    auth: AuthReducer,
    products: ProductReducer,
    cart: CartReducer,
    users: UserReducer,
    orders: OrderReducer,
    projects: ProjectReducer,
    allprojects: AdminProjectsReducer,
    blog: PostReducer,
    notifications: NotificationReducer,
    announcements: AnnouncementReducer,
    service: ServiceCategory,
    subscription: SubscriptionReducer,
});

export default rootReducer;
