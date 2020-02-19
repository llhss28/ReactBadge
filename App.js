import React from "react"
import Badge from "./Badge"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            email: "",
            phone: "",
            birth: "",
            favfood: "",
            text: "",
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        // this.badge = this.badge.bind(this)
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addBadge = (e) => {
        e.preventDefault()
        let badge = {
            firstname: this.state.firstname,
            lastname: this.state.lastname, 
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
            birth: this.state.birth,
            favfood: this.state.favfood,
            text: this.state.text
        }
        console.log(this.state.text)
        // let list = [...this.state.list]
        // list.push()
        this.setState(prevState => {
            return {
                list: [...prevState.list, badge],
                firstname: "",
                lastname: "",
                age: "",
                email: "",
                phone: "",
                birth: "",
                favfood: "",
                text: "",
            }
        })  
    }
    render(){
        const { firstname, lastname, email, age, phone, birth, favfood} = this.state;
        const enabled = firstname.length >= 3 && lastname.length > 3 && phone.length > 3 && age.length > 0 && favfood.length > 3 && birth.length > 3 && email.length > 3;
        const mappedBadges = this.state.list.map(badge => <Badge fName={badge.firstname} lName={badge.lastname}age={badge.age} food = {badge.favfood} email={badge.email} phone= {badge.phone} birth= {badge.birth} text ={badge.text}/>)
        return(
            <div>
            <form>
                <input type = "text" 
                name = "firstname" 
                placeholder= "First Name" 
                onChange = {this.handleChange} 
                value={this.state.firstname}/>

                <input type = "text" 
                name = "lastname" 
                placeholder= "Last Name"
                onChange = {this.handleChange}
                value={this.state.lastname} />

                <br/>

                <input type = "Number" 
                name = "age" 
                placeholder= "Age" 
                onChange = {this.handleChange}
                value={this.state.age} />

                <input type = "text" 
                name = "email" 
                placeholder= "Email" 
                onChange = {this.handleChange}
                value={this.state.email} />

                <br/>

                <input type = "text" 
                name = "birth" 
                placeholder= "Place of Birth" 
                onChange = {this.handleChange}
                value={this.state.birth} />

                <input type = "Number" 
                name = "phone" 
                placeholder= "Phone" 
                onChange = {this.handleChange}
                value={this.state.phone} />

                <br/>

                <input type = "text" 
                name = "favfood" 
                placeholder= "Favorite Food" 
                onChange = {this.handleChange}
                value={this.state.favfood} />

                <textarea type = "text" 
                name = "text" 
                laceholder="test" 
                onChange = {this.handleChange}
                value={this.state.text}>
                </textarea>

                <button disabled={!enabled} onClick = {this.addBadge}>Submit</button>

            </form>
            {mappedBadges}
                </div>
        )
    }
}
export default App