import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-5 text-center'>
            <h1 className='py-5'>Questions And Answers</h1>
           
            <div className='div-1 mt-5'>
                <h1 className='text-center'>1. Difference between javascript and nodejs</h1>
                <div className='text-center py-4 css-table'>
                    <table className='table  '>
                        <tr>
                            <th><span className='deponic'> <h4> Javascript</h4></span></th>
                            <th><span className='deponic'><h4>Nodejs</h4></span></th>
                        </tr>
                        <tr>
                            <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                            <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                        </tr>
                        <tr>
                            <td>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                            <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='my-5 py-5 section-2'>
                <h1>2. When should you use nodejs ? <br />And <br />When should you use mongodb ?
                </h1>
                <p className='p-5'>So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <h5> Use mongodb </h5>
                <p className='p-5'>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

            </div>
            <div className='my-2 py-5 div-1'>
                <h1>3. Differences between sql and nosql databases.</h1>
                <div className='text-center py-4 css-table'>
                    <table className='table  '>
                        <tr>
                            <th> <h3> SQL</h3></th>
                            <th><h3>NoSQL</h3></th>
                        </tr>
                        <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries.</td>
                            <td>These databases are not so good for complex queries.</td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='my-5 p-5 section-2'>
                <h1>4.  What is the purpose of jwt and how does it work </h1>
                <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>

        </div>
    );
};

export default Blogs;