import database from "../../../helpers/database.ts";
import User from "../dto/user.dto.ts";

class UserRepository {

    async findAll(): Promise<any> {
        return await database.query("SELECT id,name FROM users ORDER BY id ASC;")
    }

    async findById(id: number): Promise<any> {
        return await database.query({
            text: "SELECT id,name FROM users WHERE id = $1;",
            args: [id]
        })
    }

    async create(user: User): Promise<any> {
        return await database.query({
            text: "INSERT INTO users (name) VALUES ($1)",
            args: [user.name]
        })
    }

    async update(user: User): Promise<any> {
        return await database.query({
            text: "UPDATE users set name = $1 where id = $2",
            args: [user.name, user.id]
        })
    }

    async delete(id: number): Promise<any> {
        return await database.query({
            text: "DELETE FROM users where id = $1",
            args: [id]
        })
    }

}

export default new UserRepository();
