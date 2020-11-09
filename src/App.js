import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

let resultDisplay;

export default function App() {

  function generatePassword(length,symbols) {
    let charset = "",
    retVal = "";
    if(symbols){
      charset = "!@#$%^&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      while(true){

        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        if((retVal.includes("!") || retVal.includes("@") || retVal.includes("#") ||
              retVal.includes("$") || retVal.includes("%") || retVal.includes("^") ||
              retVal.includes("&"))){
                break;

        }else{
          retVal = "";

        }
      }

    }else{
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for ( i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
    }

    console.log(retVal);
    return retVal;
}


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data.digits);
    resultDisplay = generatePassword(data.digits, data.specialCharacter);
    //alert(JSON.stringify(data));
    console.log(resultDisplay);
  };
  const intialValues = {
    firstName: "10",
  };

  return (
<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="digits">How many digits you would like to generate from your local computer</label>
      <input
        defaultValue={intialValues.firstName}
        name="digits"
        placeholder="12"
        ref={register}
      />


      <div className="checkboxDis">
      <label htmlFor="specialCharacter">
      <input className = "myCheckbox"
        type="checkbox"
        name="specialCharacter"
        value="true"
        ref={register}
      />

      Use !@#$%^&</label>
      </div>

      <input type="submit" />
    </form>
    <br></br>
    <h1>{resultDisplay}</h1>
    <h5>  ✝︎ ART-Project © Copyright 2020</h5>

</div>
  );
}
