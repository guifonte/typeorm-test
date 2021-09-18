import {CategoryController} from "./controller/CategoryController"
import {DeviceController} from "./controller/DeviceController"

export const Routes = [{
    method: "get",
    route: "/categories",
    controller: CategoryController,
    action: "all"
}, {
    method: "get",
    route: "/categories/:id",
    controller: CategoryController,
    action: "one"
}, {
    method: "post",
    route: "/categories",
    controller: CategoryController,
    action: "save"
}, {
    method: "delete",
    route: "/categories/:id",
    controller: CategoryController,
    action: "remove"
}, {
    method: "get",
    route: "/devices",
    controller: DeviceController,
    action: "all"
}, {
    method: "get",
    route: "/devices/:id",
    controller: DeviceController,
    action: "one"
}, {
    method: "post",
    route: "/devices",
    controller: DeviceController,
    action: "save"
}, {
    method: "delete",
    route: "/devices/:id",
    controller: DeviceController,
    action: "remove"
}];