import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export function App() {
  const { register, handleSubmit, watch, formState:{errors} } = useForm();
  const [data, setData] = useState("");

  console.log(errors)


  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(data)
    })}>
      <Header />


      <label htmlFor="firstName" />
      <input {...register('firstName', {
        required: 'This field is required' })} id="firstName" placeholder="First name..." />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName" />
      <input {...register("lastName", {
        required:'This field is required',
        maxLength: {
          value:4,
          message:'You exceeded max length'
        }
        })} id="lastName" placeholder="Last name..." />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="age" />
      <input {...register("age",{valueAsNumber:true, required:true})} />


      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}

export default App;