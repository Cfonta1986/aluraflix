import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import { gris2 } from '../componentes/UI/variables';
import { Container } from '../componentes/body/index';
import BtnLimpiar from '../componentes/Botones/BtnLimpiar';
import BtnAceptar from '../componentes/Botones/BtnAceptar';
import InputTitulo from '../componentes/inputs/InputTitulo';
import InputTexto from '../componentes/inputs/InputTexto';
import SeleccionaCategoria from '../componentes/inputs/InputCategoria';

export const TituloVideo = styled(Typography)`
  text-align: center;
  color: ${gris2};
`;

export const StyledContainer = styled(Container)`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const FormVideo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TituloVideo sx={{ mb: 5 }} variant="h2">Nuevo video</TituloVideo>
        <InputTitulo valor="Titulo" helperText="Mínimo de 3 caracteres y máximo de 80" datos={register('Titulo', { required: true, minLength: 3, maxLength: 80 })} errors={errors} />
        <InputTitulo valor="Link del video" helperText="Introduzca un link válido" type="url" datos={register('Link del Video', { required: true, maxLength: 100 })} errors={errors} />
        <InputTitulo valor="Link imagen del video" helperText="Introduzca un link válido" type="url" datos={register('Link de la Imagen del Video', { required: true, maxLength: 100 })} errors={errors} />
        <SeleccionaCategoria datos={register('Categoria', { required: true })} errors={errors} />
        <InputTexto valor="Descripción" helperText="Mínimo de 3 caracteres" datos={register('Descripción', { required: true, minLength: 3 })} errors={errors} />
        <InputTitulo valor="Código de seguridad" helperText="Introduzca un código válido" datos={register('Código de Seguridad', { required: true, pattern: /Fonta/ })} errors={errors} />
        <div>
          <BtnAceptar valor="Titulo" tipo="submit" />
          <BtnLimpiar />
          <BtnAceptar />
        </div>
      </form>
    </StyledContainer>
  );
};

export default FormVideo;
