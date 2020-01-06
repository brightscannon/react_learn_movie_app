import React from 'react';
import axios from 'axios';

// 2-2. Planning Movie app, axios
// 사용되는 API site https://yts.lt/api#list_movies

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    // async + await 을 사용해야 js가 아직 요청중인 axios를 놓치지 않음
    getMovies = async() => {
        const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log('loading json finished!')
    }
    componentDidMount(){
    
        //--- 6초가 지나면 작동하는 함수 ---
        // setTimeout(()=>{
        //     this.setState({ isLoading: false});
        // }, 6000);

        //--- 동적 로딩 axios 함수 ---
        this.getMovies();
    }
    
    render(){
        const { isLoading }= this.state;
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
            </div>
        );
    }
}


////////////////////////////////////////////////////////////////////////////////////
// 2-1. setState, component lifecycle - (Mounting, Updating, Unmounting) -----------

// class App extends React.Component{

//     constructor(props) {
//         super(props);
//         console.log('hello')
//     }

//     state = {
//         count: 0
//     };
//     add = () => {
//         this.setState(current => ({count: current.count + 1}));
//     };
//     minus = () => {
//         this.setState(current => ({count: current.count - 1}));
//     };
//     componentDidMount(){
//         console.log('component rendered')
//     }
//     componentDidUpdate(){
//         console.log('I just updated!')
//     }
//     componentWillUnmount(){
//         console.log('good bye :(')
//     }
//     render() {
//         console.log("I'm rendering")
//         return (
//         <div>
//             <h1>The number is : {this.state.count}</h1>
//             <button onClick={this.add}>Add</button>
//             <button onClick={this.minus}>minus</button>
//         </div>)
//     };
// }







///////////////////////////////////////////////////////////////////
// 1. Food 예제 function components --------------------------------

// import PropTypes from 'prop-types';

// function Food({ name, picture, rating }){
//     return (
//         <div>
//             <h1>I like {name} </h1>
//             <h4>ratings : {rating}/5.0</h4>
//             <img src={picture} alt='none' />
//         </div>
//     );
// }

// Food.propTypes = {
//     name : PropTypes.string.isRequired,
//     picture : PropTypes.string.isRequired,
//     rating : PropTypes.number.isRequired
// };


// const foodILike = [
//                     {id:1, name:'pizza', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23Xt8NG9C66imQoz57tNX7kbQyiDmHI8GHYRafVjFb-0O0bjZ0g&s', ratings:5},
//                     {id:2, name:'lotteria burger', img:'http://www.lotteria.com/Data//Goods/291/DetailImage.jpg', ratings:7.1}
//                 ]

// function renderFood(dish){
//     return <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.ratings}/>
// }

// function App() {
//     return (
//         <div>
//             <h1>
//             Hello!! 
//             </h1>
//             {foodILike.map(renderFood)}
//         </div>
//     );
//}

export default App;