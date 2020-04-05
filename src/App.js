import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilterComponent from "./components/filterComponent";
import SelectedFilters from "./components/SelectedFilters";
import SearchComponent from "./components/searchComponent";
import CharacterList from "./components/listComponent";
import axios from 'axios';

class App extends React.Component {
  species = ["Human", "Alien", "Unknown"];
  gender = ["Male", "Female"];
  status = ["Alive", "Dead", "Unknown"];
  selected = [];
  searchName = '';

  order = 'ascending'
  state = {
    species: {
      Human: false,
      Alien: false,
      Unknown: false
    },
    gender: {
      Male: false,
      Female: false
    },
    status: {
      Alive: false,
      Dead: false,
      Unknown: false
    },
    characters: [],

  };
  

  getList = (param) => {
    axios.get('https://rickandmortyapi.com/api/character/', {
      params: param
    })
    .then((response) => {
      let list = this.sort(response.data.results);
      this.setState({characters:list});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getSearch = (userInput)=> {
    this.searchName = userInput;
    if(this.searchName !== ''){
      this.updateList();
    }
  }

  sort = (listArray)=>{
    if(this.order === "descending"){
      listArray.sort((a,b)=> b.id - a.id)
    }else{
      listArray.sort((a,b)=> a.id - b.id)
    }
    return listArray;
  }

  sortCharacters = (e)=> {
    const order = e.target.value;
    this.order = order;
    let copy = this.state.characters.slice(0,this.state.characters.length);
    copy = this.sort(copy);
    this.setState({characters:copy})
  }

  pickSelected = () => {
    this.selected.splice(0, this.selected.length);
    for (let key in this.state) {
      for (let key2 in this.state[key]) {
        if(this.state[key].__proto__.constructor.name === "Object"){
          if (this.state[key][key2]) {
            this.selected.push({ cat: key, filter: key2 });
          }
        }
      }
    }

  };
  updateFilter = e => {
    let cat = e.target.name.toLowerCase();
    let filter = e.target.id;
    let categoryNew = { ...this.state[cat] };
    if(e.target.checked){
      for (let key in categoryNew) {
        categoryNew[key] = false
      }
    }
    categoryNew[filter] = !categoryNew[filter];
    let obj = {};
    obj[cat] = categoryNew;
    this.setState(obj,this.updateList);
  };
  componentDidMount(){
    this.updateList();
  }

  updateList = () => {
    let param = {};
    this.selected.map((item) => param[item.cat] = item.filter.toLowerCase());
    if(this.searchName.length){
      param.name = this.searchName;
    }
    this.getList(param);
  }

  render() {
    this.pickSelected();
    return (
      <div className="App">
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-md-2 mb-4">
              <h3>Filters</h3>
              <FilterComponent
                category="Species"
                items={this.species}
                filters={this.state.species}
                udpateFilter={this.updateFilter}
              ></FilterComponent>
              <FilterComponent
                category="Gender"
                items={this.gender}
                filters={this.state.gender}
                udpateFilter={this.updateFilter}
              ></FilterComponent>
              <FilterComponent
                category="Status"
                items={this.status}
                filters={this.state.status}
                udpateFilter={this.updateFilter}
              ></FilterComponent>
            </div>
            <div className="col mb-4">
              <h3>Selected Filters</h3>
              <SelectedFilters
                list={this.selected}
                updateFilter={this.updateFilter}
              ></SelectedFilters>
              <div className="row">
                <div className="col-md-5">
                  <SearchComponent search={this.getSearch} ></SearchComponent>
                </div>
                <div className="col-md-3 offset-md-4">
                  <label>Sort By</label>
                  <select className="form-control" value={this.order} onChange={this.sortCharacters} >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </div>
              <CharacterList characters={this.state.characters}></CharacterList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
