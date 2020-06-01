import userRepository from "../repository/user.repository.ts";
import User from "../dto/user.dto.ts";

class UserService {

    async findAll(): Promise<any> {
        const data = await userRepository.findAll();
        const users = new Array<User>();

        data.rows.map((user: []) => {
            let obj: any = new User();

            data.rowDescription.columns.map((item: any, index: number) => {
                obj[item.name] = user[index]
            });

            users.push(obj);
        });

        return users;
    }

    async findById(id: number): Promise<any> {
        const data = await userRepository.findById(id);
        let user: any = new User();

        data.rows.map((dataUser: []) => {
            data.rowDescription.columns.map((item: any, index: number) => {
                user[item.name] = dataUser[index]
            });
        });

        return user;
    }

    async create(ctx: any): Promise<any> {
        const body = await ctx.request.body({
            contentTypes: {
                text: ["application/json"],
            },
        });

        let user = new User();
        user.name = body.value.name;

        return await userRepository.create(user);
    }

    async update(ctx: any): Promise<any> {
        const body = await ctx.request.body({
            contentTypes: {
                text: ["application/json"],
            },
        });

        let user = new User();
        user.id = ctx.params.id
        user.name = body.value.name;

        return await userRepository.update(user);
    }

    async delete(id: number): Promise<any> {
        return await userRepository.delete(id);
    }

}

export default new UserService();
