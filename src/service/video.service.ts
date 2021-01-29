import { emailTemplate } from './../mocks/email'

export const createVideo = async ({ product, template, firstName, fullName, phone, company, service, experience }) => {
  const myHeaders = new Headers()
  myHeaders.append('external-id', '9a7853da-6cc1-4afd-8212-371b598a2572')
  myHeaders.append('token', '1392f700ac1f4f6036f6cf788a295d43')

  console.log('Test with correct API link')

  var formdata = new FormData()
  formdata.append('[video]name', 'smart_bayer')
  formdata.append('[video]track_id', template.value.trackId)
  formdata.append('[video]template_id', template.value.id)
  formdata.append('[video][data]texto_nome_agricultor_01', firstName)
  formdata.append('[video][data]texto_contato_01', fullName)
  formdata.append('[video][data]texto_contato_02', phone)

  if (company) {
    formdata.append('[video][data]texto_produto_01', company.value.description)
    formdata.append('[video][data]foto_produto_01', product.value.photoUri)
    formdata.append('[video][data]titulo_hibrido_01', product.value.name)
    formdata.append('[video][data]texto_hibrido_01', product.value.description)
  }

  if (service) {
    formdata.append('[video][data]titulo_servico_01', service.value.name)
    formdata.append('[video][data]texto_servico_01', service.value.description)
    formdata.append('[video][data]foto_servico_01', service.value.photoUri)
  }

  if (experience) {
    formdata.append('[video][data]texto_experiencia_01', experience.value.description)
    formdata.append('[video][data]texto_experiencia_02', experience.value.secondDescription)
    formdata.append('[video][data]foto_experiencia_01', experience.value.photoUri)
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow' as RequestRedirect,
  }

  const data = await fetch('https://api.chiligumvideos.com/api/videos', requestOptions).then((response) =>
    response.json()
  )

  return data
}

export const sendVideoEmail = (url, userEmail) => {
  const email = emailTemplate(url)

  var myHeaders = new Headers()
  myHeaders.append('Authorization', 'Basic Y2hpbGlndW06Y2hpbGlndW1fYWRtaW5pc3RyYXRvcg==')
  myHeaders.append('Content-Type', 'application/json')

  const data = {
    from: { name: 'Chiligum Creatives', email: 'admin@chiligumvideos.com' },
    to: userEmail,
    message_title: 'Testes',
    html: email,
  }

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  }

  fetch(
    'https://ybgviasmge.execute-api.us-east-1.amazonaws.com/prod/send_email',
    //@ts-ignore
    requestOptions
  )
}
