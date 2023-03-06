import Searchbar from './Gallery/Searchbar'
import ImageGallery from './Gallery/ImageGallery';
import Button from './Gallery/Button';
import Loader from './Gallery/Loader';
import { useState } from 'react';

function  App (){

  const [hits,setHits] = useState([]);
  const [page,setPage] = useState(1);
  const [name,setName] = useState('');
  const [loading,setLoading] = useState(false);
  const [totalHits,setTotalHits] = useState(0);


  const handleOnClick =(statePage)=>{
    setPage(statePage + 1)
    const page = statePage + 1;
    handleSubmit(name,page)
  }

  const handleSubmit =(nameCb,page) => {
     let curentPage = page ;
    if(nameCb !== name){
      setHits([]);
      setPage(1)
      curentPage = 1;
    }
    setName(nameCb);
    setLoading(true);
    fetch(`https://pixabay.com/api/?q=${nameCb}&page=${curentPage}&key=32190831-932b1a3f6204f940916e3fe08&image_type=photo&orientation=horizontal&per_page=12`)
      .then(el => el.json()).then(el => {
        if(el.hits){
          if(nameCb !== name){
            setHits([...el.hits])
          }else{
            setHits([...hits,...el.hits]);
          }
          setLoading(false);
          setLoading(false);
          setTotalHits(el.totalHits);
        }
      })
  }

  return (
    <div className="App">
      <Searchbar  onSubmit={handleSubmit}/>
      <ImageGallery hits={hits}/>
      {hits.length < totalHits?<Button numPage={page} handleOnClick={handleOnClick}/>:""}
      {loading?<Loader/>:''}
    </div>
  );

};


export default App
