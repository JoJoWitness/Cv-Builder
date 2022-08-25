import React from "react";
import User from "../img/user.svg"
import uniqid from "uniqid";

class CvInput extends React.Component{
    

    render(){
        return(
            <div className="col col-sm-12 border border-secodanry bg-light p-5 w-auto h-75 mt-5 rounded">
               <PersonalInfoInput 
               props={this.props.personalINFO}
               handleChange = {this.props.handleChangePJ}
               />
               <ExperienceInfoInput 
               props={this.props.experienceINFO}
               handleChange = {this.props.handleChangeEXP}
               />
               <EducationInfoInput 
               props={this.props.educationINFO}
               handleChange = {this.props.handleChangeEDU}
               />
            </div>
        )
    }
}

class PersonalInfoInput extends React.Component{
    
    render()
     {
        return(

            <div className="row container-md my-5">
                <div className="container col align-self-center">
                <form action="" className="container col ">
                    <label className="row fs-3 fw-normal form-label">
                        Name:
                        <input type="text" id='name' name='name'onChange={this.props.handleChange} value={this.props.name} />
                    </label>
                    <label className="row fs-3 fw-normal form-label">
                        Country of origin:
                        <input type="text" id='country' name='country' onChange={this.props.handleChange} value={this.props.country}/>
                    </label>
                </form>
                </div>  

                <div className="d-flex container col align-items-center justify-content-center">
                    <img className="img-thumbnail " style={{width: 170}} src={User}></img>
                </div>      
            </div>
        );

    }
}

class ExperienceInfoInput extends React.Component{


    render()
     {
        return(

            <div className="row container-md mb-5">
                <p className="row fs-1 fw-bold">Work experiences</p>
                <form action="" className="container fs-3">
                    <label className="row fw-normal form-label">
                        Work place:
                        <input type="text" id='workplace' name='workplace' onChange={this.props.handleChange} value={this.props.workplace}/>
                    </label>
                    <label className="row fw-normal form-label">
                        Duration:
                        <input type="text" id='workDuration'name='duration' onChange={this.props.handleChange} value={this.props.duration}/>
                    </label>
                </form>        
            </div>
        );

    }
}

class EducationInfoInput extends React.Component{
    
    render()
     {
        return(

            <div className="row container-md">
                <p className="row fs-1 fw-bold">Education</p>
                <form action="" className="container fs-3 ">
                    <label className="row fw-normal form-label">
                        University:
                        <input type="text" id='university' name='university' onChange={this.props.handleChange} value={this.props.university}/>
                    </label>
                    <label className="row fw-normal form-label">
                        Duration:
                        <input type="text" id='durationUni' name='durationUni' onChange={this.props.handleChange} value={this.props.durationUni}/>
                    </label>
                    <label className="row fw-normal form-label">
                        High School:
                        <input type="text" id='highSchool' name='highSchool' onChange={this.props.handleChange} value={this.props.highSchool}/>
                    </label>
                    <label className="row fw-normal form-label">
                        Duration:
                        <input type="text" id='durationHS' name='durationHS' onChange={this.props.handleChange} value={this.props.durationHS}/>
                    </label>
                </form>        
            </div>
        );

    }
}

export default CvInput