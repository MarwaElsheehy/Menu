import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'react-bootstrap'
import Title from './Components/Title';
import Categories from './Categories';
import Content from './Components/Content';
import { items } from './Components/Data';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState(items)
  const all = ['All', ...new Set (items.map((pro)=> pro.category))]
  //filter function
  const filter = (cat)=>{
    if(cat === "All"){
      setdata(items)
    }else {
  const newArr = items.filter((item)=>item.category === cat)
      setdata(newArr)
    }
  }
  //filter search
  const search = (word)=>{
    if(word !== ""){
      const newArr = items.filter((item)=>item.title === word)
          setdata(newArr)
    }
  }
  return (
    <div className="App">
      <NavBar search={search}/>
      <Container>
        <Title/>
        <Categories filter={filter} all={all}/>
        <Content data={data}/>
      </Container>
    </div>
  );
}

export default App;
