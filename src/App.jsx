import React, { useState, useEffect, useMemo } from "react"; // useState - хук
import Post from "./component/post/Post";
import Modal from "./component/Modal/Modal";
import axios from "axios";

const PAGE_SIZE = 10;

const App = () => {

    function addPost(post) {
        const newPost = {
            ...post,
            userId: 1,
            id: (new Date()).getMilliseconds(),
        }
        setPosts([...posts, newPost]);
    }

    const [filter, setFilter] = useState({
        searching: '',
        page: 1,
    })

    const [open, setOpen] = useState(false);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data).then(data => setPosts(data))
            .catch((err) => setPosts([]));
    }, []);

    const filteredPosts = useMemo(() => {
        if (!posts.length) return [];

        const { searching, page } = filter;

        const result = posts.filter(post =>
            post.title.toLowerCase().includes(searching.toLowerCase())
        ).slice(PAGE_SIZE * (page - 1), 10 + PAGE_SIZE * (page - 1));
        return result
    }, [posts, filter]);

    return (
        <div className="container">
            <input
                className="post-input"
                value={filter.searching}
                onChange={(e) => setFilter({
                    searching: e.target.value,
                    page: 1
                })}
                placeholder="Создать" />
            {
                posts.length ?
                    <div className="post-list">
                        {filteredPosts.map((post) => (
                            <Post key={post.id} data={post} />
                        ))}
                    </div> : (
                        <h2>Постов нет</h2>
                    )
            }

            <button onClick={() => setOpen(true)}>Добавить</button>
            <Modal open={open} addPost={addPost} close={() => setOpen(false)} />
        </div>
    );
}

export default App;