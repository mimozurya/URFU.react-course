import React, { useState } from "react"; // useState - хук
import Post from "./component/post/Post";
import Modal from "./component/Modal/Modal";

const App = () => {

    function addPost(post) {
        const newPost = {
            ...post,
            userId: 1,
            id: (new Date()).getMilliseconds(),
        }
        setPosts([...posts, newPost]);
    }

    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);

    const [posts, setPosts] = useState([
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ]);

    return (
        <div className="container">
            {input}
            <input className="post-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Создать" />
            <div className="post-list">
                {posts.map((post) => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
            <button onClick={() => setOpen(true)}>Добавить</button>
            <Modal open={open} addPost={addPost} close={() => setOpen(false)} />
        </div>
    );
}
// 1:37:29
export default App;