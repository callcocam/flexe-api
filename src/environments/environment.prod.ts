
let getHostname = window.location.hostname

let getArray = getHostname.split('.')

let getSubDominio = getArray[0];

switch (getSubDominio) {
	case "novoxingu":
		console.log(`Você está no subdomínio ${getSubDominio}`);
		getSubDominio = 'novoxingu'
		break;
		case "novoxingu":
		console.log(`Você está no subdomínio ${getSubDominio}`);
		break;
		case "constantina":
		getSubDominio = 'constantina'
		break;	
	default:
		getSubDominio = 'sistema'
		break;
}


export const environment = {
  production: true,
  api: '//app.obrasmunicipais.com.br',
  default:getSubDominio
};
