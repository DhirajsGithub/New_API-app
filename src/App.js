import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



import React, { Component } from 'react'

export default class App extends Component {

  // const pageSize = 5  // for functional base component
  pageSize = 5;

  apiKey = "d815b37b4f0b4ca78eafd1b0a3e0681d"
  state = {
    progress:10
  }
  // const [progress, setProgress] = useState('')
  
  setProgress= (progress)=>{
    this.setState({progress: progress})
  }

 
  render() {
    return (
      <div>

<Router>
      <Navbar />
      <LoadingBar

        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => this.state.progress(0)}
      />
       
      <Routes>

           {/* doing a force rebound  
           adding a unique key to each route will rebound it whenever a path change
           without a unique key react will think that same component/element is present why should I rebound it*/}
       
          <Route exact path='/'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize = {this.pageSize} country= "in" category = "general"/>} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize = {this.pageSize} country = "in" category= "business"/>} />
          <Route exact path='/entertainment'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize = {this.pageSize} country = "in" category= "entertainment"/>} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize = {this.pageSize} country = "in" category= "general"/>} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize = {this.pageSize} country = "in" category= "health"/>} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize = {this.pageSize} country = "in" category= "science"/>} />
          <Route exact path='/sports'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize = {this.pageSize} country = "in" category= "sports"/>} />
          <Route exact path='/technology'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize = {this.pageSize} country = "in" category= "technology"/>} />


      </Routes>
      </Router>
        
      </div>
    )
  }
}




// function App() {
//   pageSize = 15
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
