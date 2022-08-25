import React from "react";
import ReactDOM from 'react-dom/client';
import CvInput from "./inputs";
import CvOutput from "./output";


class App extends React.Component{
    constructor(){
        super()
        this.state = {

            personalINFO:{ 
                 name: '',
                 country: ''
             },
             experienceINFO:{ 
                workplace: '',
                duration: ''
            },
            educationINFO:{ 
                university: '',
                durationUni: '',
                highSchool:'',
                durationHS:''
            }

       
         };
    }
   

    handleChangeEXP = (e) => {
        const {name, value} = e.target
        const data = this.state.experienceINFO
        this.setState({
            ...data
            [name] = value
        });
        console.log(data)
    }
    handleChangePJ = (e) => {
            const {name, value} = e.target
            const data = this.state.personalINFO
            this.setState({
                ...data
                [name] = value
            });
            console.log(data)
    }

    handleChangeEDU = (e) => {
            const {name, value} = e.target
            const data = this.state.educationINFO
            this.setState({
                ...data
                [name] = value
            });
            console.log(data)

        

    }

    render(){

        
        return(
            <div className=" d-flex gap-3 justify-content-around align-items-center container-fluid bg-dark h-auto vw-100">
                   <CvInput 
                    personalINFO={this.state.personalINFO}
                    experienceINFO ={this.state.experienceINFO}
                    educationINFO ={this.state.educationINFO}
                    handleChangeEXP={this.handleChangeEXP}
                    handleChangeEDU={this.handleChangeEDU}
                    handleChangePJ={this.handleChangePJ}
                    />
                   <CvOutput 
                   PersonalINFO ={this.state.personalINFO}
                   experienceINFO ={this.state.experienceINFO}
                   educationINFO ={this.state.educationINFO}
                   />
               </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));

const rootToEdit = document.querySelector(':root')
rootToEdit.setAttribute('class', 'bg-dark')
root.render(
    <App />
    );

