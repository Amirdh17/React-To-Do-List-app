import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useState, useEffect } from 'react';
import AddItems from './AddItems';
import "./App.css"
import SearchItems from './SearchItems';
import apiRequest from './requestApi';

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([]);

  const [newItems, setNewItems] = useState("")

  const [search, setSearch] = useState("")

  const [er, setErr] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
      const fetchItems = async () => {
        try  {
            const response = await fetch(API_URL);
            if (!response.ok) {
              throw Error("404 - Not Found");
            }
            const getItems = await response.json();
            setItems(getItems);
            setErr(null)
        } catch (err) {
          setErr(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      setTimeout( () => fetchItems(), 2000);
      
  }, [])

  const handleCheck = async (id) => {
    const selectedItem = items.map((item) => id === item.id? {...item, checker:!item.checker} : item);
    setItems(selectedItem);

    const myItem = selectedItem.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checker:myItem[0].checker}) 
    }
    const REQ_API = `${API_URL}/${id}`;
    const result = await apiRequest(REQ_API, updateOption);
    if (result)  setErr(result);
  }
  

  const handleButton = async (id) => {
    const listedItems = items.filter((item) =>  id !== item.id );
    setItems(listedItems);
    const deleteOption = {
      method: 'DELETE'
    }
    const REQ_URL = `${API_URL}/${id}`;
    const result = await apiRequest(REQ_URL, deleteOption);
    if (result) setErr(result);
  }

  const addItem = async (item) => {
    const id = items.length !== 0 ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checker: false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems);

    const postOption = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOption);

    if (result) setErr(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) {
      return;
    }
    const item = newItems;
    addItem(item);
    setNewItems("")
  }

  return (
    <div className='App'>
      
      <Header />
      <AddItems 
        newItems = {newItems}
        setNewItems = {setNewItems} 
        handleSubmit = {handleSubmit}
      />
      <SearchItems 
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Content Loading...</p>}
        {er && <p>{ `Error : ${er}`}</p>}
        {!isLoading && !er && <Content 
          items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))} 
          handleCheck = {handleCheck} 
          handleButton = {handleButton}
          />}
      </main>
      <Footer 
        items = {items}
      />
    </div>

  );
}

export default App;
