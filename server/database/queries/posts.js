const  connection=require('../config/connection');


   const  addNewPost=(user_id,post,imgLink)=>{
          const query=`insert into posts(user_id,post,img) values ($1,$2,$3) returning id,user_id,post,img as imgPost`
          return connection.query(query,[user_id,post,imgLink])
    }
    const allPosts=()=>{
      const query=`select posts.*,
      posts.img as imgPost,users.img,
      users.name,(select count(stars.*) from stars where stars.post_id=posts.id ) as likes
       from posts left join users
      on posts.user_id=users.id  ORDER BY posts.id DESC`
      return connection.query(query,[])
    }
 
 module.exports={
  addNewPost,allPosts
    }