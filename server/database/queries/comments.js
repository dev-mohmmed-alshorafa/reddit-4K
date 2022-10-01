const  connection=require('../config/connection');


   const  addComment=(comment,post_id,user_id,imgLink)=>{
          const query=`insert into comments (comment,post_id,user_id,img) values ($1,$2,$3,$4) returning *`
          return connection.query(query,[comment,post_id,user_id,imgLink])
    }
 
 module.exports={
  addComment    }