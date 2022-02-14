const movieContent=[{
  "id": 1,
  "name": "Star Wars",
  "duration": 89,
  "description": "Episode III",
  "image": "sw.jpg"
},
{
  "id": 2,
  "name": "Batman",
  "duration": 142,
  "description": "The joker",
  "image": "batman.jpg"
}

];

export const getMovie= (req,res)=>{
  res.send(movieContent);
  
  
}
export const getMovieId=(req,res)=>{
  const id= Number(req.query.id);
  res.send(movieContent[id-1])
  

}
export const addToMovie = (req,res)=>{
  const itemToAdd =req.body;

  if(movieContent.findIndex(movie=>movie.id===itemToAdd.id)<0){
    movieContent.push(itemToAdd);

  res.send({status:'Success',movieContent});
  }else{
    res.send({status:'Failed',movieContent})
  }

}
export const removeFromMovie=(req,res)=>{
  const id= Number(req.query.id);
  const indexToRemove = movieContent.findIndex(movie=>movie.id===id);

  if(indexToRemove>=0){
    movieContent.splice(indexToRemove,1);
    res.send({
      status:'OK',
      movieContent
    });
  }else{
    res.send({
      status: 'NOT OK',
      movieContent
    })
  }

}

export const updateMovie = (req, res) => {
  const movieToUpdate = req.body;
  const index = movieContent.findIndex((movie) => movie.id === movieToUpdate.id);
  if (index >= 0) {
    movieContent[index] = movieToUpdate;
    res.send({
      status: "Movie updated",
      movieContent
    });
  } else {
    res.send({
      status: " Cannot find id",
      movieContent
    });
  }
};