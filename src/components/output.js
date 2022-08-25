import React from "react";
import User from "../img/user.svg"

class CvOutput extends React.Component{
   

    render(){
       console.log(this.props.PersonalINFO.name)
        return(
            <div className="col col-sm-12 border border-secodanry bg-light p-5 h-75 w-auto mt-5 rounded">
               <PersonalInfoOutput 
                data={this.props.PersonalINFO}
                />
               <ExperienceInfoOutput
                data={this.props.experienceINFO}
                />
               <EducationInfoOutput
                data={this.props.educationINFO}
                /> 
            </div>
        )
    }
    
}

class PersonalInfoOutput extends React.Component{
 
    render()
     {
        return(

            <div className="row container-md my-5">
                <div className="container col align-self-center">
                <div className="row fs-3">
                    Name:
                    <p className="row fs-3 border-bottom">{this.props.data.name}</p>
                </div>
                <div className="row fs-3">
                    Country of origin:
                    <p className="row fs-3 border-bottom">{this.props.data.country}</p>
                </div>
                </div>  

                <div className="d-flex container col align-items-center justify-content-center">
                    <img className="img-thumbnail " style={{width: 170}} src={User}></img>
                </div>      
            </div>
        );

    }
    
}

class ExperienceInfoOutput extends React.Component{
    
    render()
     {
        return(

            <div className="row container-md mb-5">
                <p className="row fs-1 fw-bold">Work experiences</p>
                <div className="row fs-3">
                    Work place:
                    <p className="row fs-3 border-bottom">{this.props.data.workplace}</p>
                </div>
                <div className="row fs-3">
                    Duration:
                    <p className="row fs-3 border-bottom">{this.props.data.duration}</p>
                </div>   
            </div>
        );

    }
}

class EducationInfoOutput extends React.Component{
    render()
     {
         console.log(this.props)
        return(

            <div className="row container-md">
                <p className="row fs-1 fw-bold">Education</p>
                <div className="row fs-3">
                    University:
                    <p className="row fs-3 border-bottom">{this.props.data.university}</p>
                </div>
                <div className="row fs-3">
                    Duration:
                    <p className="row fs-3 border-bottom">{this.props.data.durationUni}</p>
                </div>
                <div className="row fs-3">
                    High School:
                    <p className="row fs-3 border-bottom">{this.props.data.highSchool}</p>
                </div>
                <div className="row fs-3">
                    Duration:
                    <p className="row fs-3 border-bottom">{this.props.data.durationHS}</p>
                </div> 
            </div>
        );

    }
}

export default CvOutput