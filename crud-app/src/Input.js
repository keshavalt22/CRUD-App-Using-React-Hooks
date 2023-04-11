import { useState } from "react";
import { Link } from "react-router-dom";

function Input() {

    let [name, setName] = useState("")
    let [username, setUsername] = useState("")
    let [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('users')) || []
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && username) {
            let userInfo = { name, username };
            console.log(userInfo);
            setUsers(users.concat(userInfo))
            setName("");
            setUsername("");
            localStorage.setItem('users', JSON.stringify(users.concat(userInfo)))
        }
    }

    const handleDelete = (id) => {
        let newUsers = [...users];
        newUsers.splice(id, 1);
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers))
    }

    const handleChange = (event) => {
        let id = event.target.name;
        if (id === "name") {
            setName(event.target.value)
        }
        if (id === "username") {
            setUsername(event.target.value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                ></input>
                <button
                    type="submit"
                >submit</button>
            </form>
            <div className="card">
                {users.length === 0 ? (
                    <h2>No User!</h2>
                ) : (
                    users.map((user, i) => {
                        return (
                            <div className="usercard">
                                <p>name: {user.name}</p>
                                <p>username: {user.username}</p>
                                <Link to={`/edit/:${user.name}`}>
                                    <button className="edit">Edit</button>
                                </Link>
                                <button
                                    className="delete"
                                    onClick={() => handleDelete(i)}
                                >Delete</button>
                            </div>
                        )
                    })
                )
                }
            </div>
        </div>
    )
}


export default Input;