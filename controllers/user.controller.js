const userContent=[{
    "id": 1,
    "nickname": "ajic_12",
    "email": "user@gmail.com",
    "password": "123456"
  },
  {
    "id": 2,
    "nickname": "jose_3",
    "email": "hola2@gmail.com",
    "password": "123456"
  }
  
  ];
  
  export const getUser= (req,res)=>{
    res.send(userContent);
    
    
  }
  export const getMovieId=(req,res)=>{
    const id= Number(req.query.id);
    res.send(userContent[id-1])
    
  
  }
  export const addUser = (req,res)=>{
    const itemToAdd =req.body;
  
    if(userContent.findIndex(movie=>movie.id===itemToAdd.id)<0){
      userContent.push(itemToAdd);
  
    res.send({status:'Success',userContent});
    }else{
      res.send({status:'Failed',userContent})
    }
  
  }
  