import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Titulo" {...register("Titulo", {required: true, min: 3, maxLength: 80})} />
      <input type="url" placeholder="Link del Video" {...register("Link del Video", {required: true, maxLength: 100})} />
      <input type="url" placeholder="Link de la Imagen del Video" {...register("Link de la Imagen del Video", {pattern: /^\S+@\S+$/i})} />
      <select {...register("Categoria", { required: true })}>
        <option value="Front End">Front End</option>
        <option value=" Back End"> Back End</option>
        <option value=" Innovación y Gestión"> Innovación y Gestión</option>
      </select>
      <input type="text" placeholder="Descripción" {...register("Descripción", {required: true, min: 3})} />
      <input type="password" placeholder="Código de Seguridad" {...register("Código de Seguridad", {required: true, pattern: /Fonta/i})} />

      <input type="submit" />
    </form>
  );
}