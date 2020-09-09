import React from 'react'
import './styles/main.css'

import Projects from './projects.js'

//COMPONENTS
import Menu from './components/Menu'

//PAGES
import Gallery from './pages/Gallery'
import About from './pages/About'
import Work from './pages/Work'
import Chat from './pages/Chat'
import Custom from './pages/Custom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Menu />

          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/chat' component={Chat} />

            {/* Loop the projects and create a page for each of them */}
            {Projects.map((item, key) =>

              <Route exact path={item.url} key={key} render={(props) =>
                (<Custom
                  {...props}
                  title={item.title}
                  img={item.img}
                  website={item.website}
                  github={item.github}
                  short_desc={item.short_desc}
                  long_desc={item.long_desc}

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
