import React from 'react';

function Task5(props) {
    
    const slidbar = () => (
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );

    const content = props.posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            
            <p>{post.content}</p>
            <hr></hr>
            
        </div>
    ));

    return (
        <div>
           
        
            {content}
        </div>
    );
}



export default function App() {
    const posts = [
        { id: "1", title: "hello world", content: "hello my name is tanyy" },
        { id: "2", title: "java", content: "it is a good language" },
        { id: "3", title: "python", content: "it helps in machine learning" },
    ];
    return <Task5 posts={posts} />;
}
