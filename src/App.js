import './App.css';
import photo from './img.jpg'
class App extends React.Component {
  state ={
    person: {
      FullName: "Anes Masmoudi",
      Bio: "Web Devlopper",
      ImgSrc: photo ,
      Profession:"Senior Technician in Automation",
    },
    show: true
  };

  handleShowPerson = () =>{
    this.setState({ 
      ...this.state,
      show: !this.state.show
  });
  };

  render(){
    return(
      <>
      {this.state.show &&(
        <>
        <h1>{this.state.person.FullName}</h1>
        <h1>{this.state.person.Bio}</h1>
        <img>{this.state.person.ImgSrc}</img>
        <h1>{this.state.person.Profession}</h1>
        <br/>
        </>
      )}

      <button onClick={this.handleShowPerson}>Click Here</button>
      </>
    );
  }  
}

export default App;
