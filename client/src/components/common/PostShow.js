import React from 'react'

function findDayDifference(date1, date2) {
	// always round down
 let minutes=Math.floor((Math.abs(date2-date1))/(1000*60));
  if(minutes<60){return minutes+"min"}
  if(minutes>59&& minutes<1440){return ((minutes/60).toFixed(0))+'h'}
  if(minutes>1440){return minutes/60/24 + 'd'}
    
}

const PostShow =(props)=>{



    const {posts,like,disableButton}=props
return(<div>

    {posts.map((post)=>{
        return <div key={post._id}>
            {post.PostText}     {'  '}prije
             {findDayDifference(Date.parse(post.date),Date.now())}
             {!disableButton&&<button onClick={()=>like(post._id)}>+</button>}
             likes:{post.likes.length}
            
             </div>
    })}
</div>)
}

export default PostShow