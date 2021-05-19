import {Form} from "react-bootstrap";
import {useState} from "react";

const AuthorForm =(props) =>{

    const [author,setAuthor] = useState(props.author);
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <div>
            <h1>Author Details !</h1>
            <div className='App d-flex flex-column align-items-lg-start'>
                <form style={{width:'500px'}}>
                    <div className="form-group">
                        <label htmlFor="firstname">FirstName :</label>
                        <input type="text" className="form-control form-control-sm" id="firstname"
                               value={props.author.firstname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname :</label>
                        <input type="text" className="form-control form-control-sm" id="lastname"
                               value={props.author.lastname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth :</label>
                        <input type="date" className="form-control form-control-sm" id="dob"
                        value={props.author.dob}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export  default AuthorForm