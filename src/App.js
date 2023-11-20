import './Styles/App.css';
import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css';
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";

function App() {
    const[posts, setPosts] = useState( [
        {id:1, title: 'JS 1', body: '111'},
        {id:2, title: 'JS 2', body: '222'},
        {id:3, title: 'JS 3', body: '333'},
    ])

    return (
        <div className="App">
            <form>
                <input type='text' placeholder='Название поста'/>
                <input type='text' placeholder='Описание поста'/>
                <MyButton disabled={true} >Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="JS"/>
        </div>

    );
}

export default App;
