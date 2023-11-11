import React, { useState } from "react";
import styles from './Modal.module.css';
import classNames from "classnames";

const Modal = (props) => {

    const { open, addPost, close } = props;

    function updatePost(name, value) {
        setNewPost({ ...newPost, [name]: value })
    }

    function setPost() {
        if (newPost.title) {
            addPost(newPost);
            close();
        }
    }

    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
    });

    return (
        <div className={classNames(styles['modal-container'], { [styles.open]: open })}> 
            <div className={styles['modal']}>
                <h6 className={styles['modal__title']}>Добавить пост</h6>
                <input value={newPost.title} onChange={(e) => updatePost('title', e.target.value)} className={styles['modal__input']} placeholder="Название поста" />
                <textarea value={newPost.body} onChange={(e) => updatePost('body', e.target.value)} className={styles['modal__textarea']} placeholder="Описание поста" />
                <button onClick={setPost} className={styles['modal_add']}>Добавить</button>
            </div>
        </div>
    );
};

export default Modal;