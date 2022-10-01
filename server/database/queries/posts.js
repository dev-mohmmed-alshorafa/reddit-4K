const  connection=require('../config/connection');


   const  addNewPost=(user_id,post,imgLink)=>{
          const query=`insert into posts(user_id,post,img) values ($1,$2,$3) returning id,user_id,post,img as imgPost`
          return connection.query(query,[user_id,post,imgLink])
    }
    const allPosts=()=>{
      const query=`select posts.*,
      posts.img as imgPost,users.img,
      users.name,(select count(stars.*) from stars where stars.post_id=posts.id ) as likes,
      (select count(comments.*) from comments where comments.post_id=posts.id ) as commentsNum
      ,(select json_agg(json_build_object('id',users.id,'name',users.name,'image',users.img)) from stars left join users on users.id=stars.user_id where stars.post_id=posts.id group by stars.post_id ) as whoLike
       ,(select json_agg(json_build_object('user_id',users.id,'name',users.name,'userImg',users.img,'comment',comments.comment,'img',comments.img,'id',comments.id)) from comments left join users on users.id=comments.user_id where comments.post_id=posts.id group by comments.post_id ) as comments
       from posts left join users
      on posts.user_id=users.id ORDER BY posts.id DESC`
      return connection.query(query,[])
    }
    const isLike=(user_id,post_id)=>{
      const query=`select id from stars where user_id=$1 and post_id=$2`
      return connection.query(query,[user_id,post_id])
    }
    const putLike=(user_id,post_id)=>{
      const query=`insert into stars(user_id,post_id) values($1,$2)`
      return connection.query(query,[user_id,post_id])
    }
    const deleteLike=(user_id,post_id)=>{
      const query=`delete from stars where user_id=$1 and post_id=$2 `
      return connection.query(query,[user_id,post_id])
    }
 
 module.exports={
  addNewPost,allPosts,isLike,putLike,deleteLike
    }