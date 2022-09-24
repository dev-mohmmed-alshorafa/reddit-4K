const  connection=require('../config/connection');


   const  saveNewStory=(userId,imgLink)=>{
          const query=` insert into stories(user_id,img,timefront) values ($1,$2,$3) returning img as storyImg,id,user_id,timefront`
          return connection.query(query,[userId,imgLink,Date.now()+86400000])
    }
    const deleteFinishedStories=()=>{
      const query=`delete from stories where now() >= stories.time`
      return connection.query(query)
    }

    const allStory=()=>{
const query=`select users.img,users.name,stories.img as storyimg,stories.id,stories.id,stories.timefront,
stories.user_id from stories left join users on users.id=stories.user_id where time > now()`
return connection.query(query)

}   
 module.exports={
      saveNewStory,allStory,deleteFinishedStories
    }