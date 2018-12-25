import React, { Component } from 'react';
import postdata from './postdata';
import logo from './logo.svg';
import './App.css';
import allUsers from './userdata';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" };
    const data = ['We', 'are', 'United']; //Show these in seperate tags
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }];
    const datatoRender = allUsers.map(user => {
      return {
        name: user.name,
        email: user.email,
        posts: postdata.filter(post => post.userId === user.id)
      }
    })

    console.log(datatoRender)


    return (
      <div>
        <p>{name}</p>
        <p>{obj.name}</p>
        <ul>
          {
            data.map(elem => {
              return <li>{elem}</li>
            })
          }
        </ul>

        <ul>
          {
            list.map(elem => {
              return <li>{elem.name}</li>
            })
          }
        </ul>

        <ul>
          {
            complex.map(elem => {
              return <li>{elem.company}
                <ul>
                  {
                    elem.jobs.map(job => {
                      return <li>{job}</li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>


        <ul>
          {
            datatoRender.map(user =>{
              return <li key={user.id}>
                <p>{user.email}</p>
                <p>{user.name}</p>
                <ul>
                {
                  user.posts.map(post=>{
                    return <li key={post.id}>{post.body}</li>
                  })
                }
                </ul>
              </li>
            })
          }
        </ul>


        {/* <ul>
          {
            postdata.map(post=>{
              return <li>{post.title}</li>
            })
          }
        </ul> */}





      </div>
    );
  }
}

export default App;
