import React from 'react'
import './styles/main.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Projects from './data/projects.js'
import Options from './data/options.js'

import Menu from './components/Menu'
import MenuRes from './components/MenuRes'

import Gallery from './pages/Gallery'
import About from './pages/About'
import Work from './pages/Work'
import Chat from './pages/Chat'
import Custom from './pages/Custom'

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Menu options={Options}/>
          <MenuRes options={Options}/>

          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/chat' component={Chat} />

            {Projects.map((item, key) =>
              <Route exact path={item.url} key={key} render={(props) =>
                (<Custom
                  {...props}
                  item={item}

                  prev_page={key !== 0 ? Projects[key-1].url : "#"}
                  prev_page_title={key !== 0 ? Projects[key-1].title : "#"}

                  next_page={key + 1 !== Projects.length ? Projects[key+1].url : "#"}
                  next_page_title={key + 1 !== Projects.length ? Projects[key+1].title : "#"}
                />)}
              />
            )}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
