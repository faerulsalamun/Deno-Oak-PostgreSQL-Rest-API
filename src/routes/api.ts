import UserController from '../modules/user/controller/user.controller.ts'

export const api = (router: any) => {
    router
        .get("/api/v1/users", UserController.findAll)
    router
        .get("/api/v1/users/:id", UserController.findById)
    router
        .post("/api/v1/users", UserController.create)
    router
        .patch("/api/v1/users/:id", UserController.update)
    router
        .delete("/api/v1/users/:id", UserController.delete)
};
