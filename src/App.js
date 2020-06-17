import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import { Siblings } from './Siblings';
import Scroll from './Scroll'

class App extends Component {
    constructor(){
        super()
        this.state = {
            Siblings: Siblings,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })    
    }
     render() {
        const reduceCards = this.state.Siblings.filter(Sibling => {
        return Sibling.username.toLowerCase().includes(this.state.searchfield.toLowerCase())})  
        return (
            <div className ='tc'>
                <h1 className ='f1'>RoBoFrIeNdS</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <Scroll>
                     <CardList Siblings = { reduceCards } />
                </Scroll>
                {/* <footer className='tc' style={{fontFamily: 'Times-new-roman'}}>
                    This is a webite made from react.js....... 
                </footer> */}
            </div> 
         );
    }
}
export default App;