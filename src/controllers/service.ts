import { User } from '../model/schema';

export async function createUser(data: any) {
    try {
        const newUser = await User.create(data);
        console.log(newUser);
        return {
            status: "Success",
            data: newUser
        };
    } catch (error) {
        return {
            status: "Failed",
            message: error
        };
    }
}

export async function getUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        return {
            status: "Failed",
            message: error
        };
    }
}

export async function updateUser(id: string, data: any) {
    try {
        const user = await User.findByIdAndUpdate({ "_id": id }, data, { new: true });

        if (!user) {
            return {
                status: "Failed",
                message: "User not available"
            };
        }
        return {
            status: "Success",
            data: user
        };
    } catch (error) {
        return {
            status: "Failed",
            data: error
        };
    }
}

export async function deleteUser(id: string) {
    try {
        const user = await User.findByIdAndDelete({ "_id": id });
        if (!user) {
            return {
                status: "Failed",
                message: "User not available"
            };
        } else {
            return {
                status: "Success",
                message: user
            };
        }
    } catch (error) {
        return {
            status: "Failed",
            message: error
        };
    }
}
