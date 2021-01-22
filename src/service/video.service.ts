import { useInfo } from '@store/useInfo';
export const createVideo = async () => {
  const {
    product,
    template,
    firstName,
    fullName,
    email,
    company,
    service,
    experience,
  } = useInfo();

  const myHeaders = new Headers();
  myHeaders.append('external-id', '6325700b-d548-48e1-8fb6-37ad091484d0');
  myHeaders.append('token', '0ebf28b8cc1c4fe407eabef4575e3a24');

  var formdata = new FormData();
  formdata.append('[video]name', 'nome_controle_taxonomia');
  formdata.append('[video]track_id', template.value.trackId);
  formdata.append('[video]template_id', template.value.id);
  formdata.append('[video][data]texto_nome_agricultor_01', firstName);
  formdata.append('[video][data]texto_contato_01', fullName);
  formdata.append('[video][data]texto_contato_02', email);
  formdata.append('[video][data]texto_produto_01', company.value.description);
  formdata.append('[video][data]foto_produto_01', product.value.photoUri);
  formdata.append('[video][data]titulo_hibrido_01', product.value.name);
  formdata.append('[video][data]texto_hibrido_01', product.value.description);
  formdata.append('[video][data]titulo_servico_01', service.value.name);
  formdata.append('[video][data]texto_servico_01', service.value.description);
  formdata.append('[video][data]foto_servico_01', service.value.photoUri);

  experience &&
    formdata.append(
      '[video][data]texto_experiencia_01',
      experience.value.description
    );

  experience &&
    formdata.append(
      '[video][data]texto_experiencia_02',
      experience.value.secondDescription
    );

  experience &&
    formdata.append(
      '[video][data]foto_experiencia_01 ',
      experience.value.photoUri
    );

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
  };

  const data = await fetch(
    'https://api.chiligumvideos.com/api/videos',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result));

  return data;
};
