/**
 * Script de scaffoldind de CRUD.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

var prompt = require('prompt');
var copydir = require('copy-dir');
var fs = require('fs');
var replace = require('replace-in-file');
var path = require('path');

var modulo;
var moduloCap;
var moduloCapPlural;
var moduloPlural;

function capitalize(texto, sufixo) {
  sufixo = sufixo || '';
  var arrTexto = texto.split('-');
  var textoCap = '';

  for (var i = 0; i < arrTexto.length; i++) {
    textoCap += arrTexto[i].charAt(0).toUpperCase() +
      arrTexto[i].slice(1) + sufixo;
  }

  return textoCap;
}

// Obtém o nome do módulo CRUD a ser criado
var schema = {
  properties: {
    modulo: {
      pattern: /^[a-z\s\-]+$/,
      message: 'Módulo deve conter somente caracteres de a-z',
      required: true
    }
  }
};

prompt.start();
console.log('Digite o nome do módulo a ser criado (ex.: pessoa):');


prompt.get(schema, function (err, input) {
  modulo = input.modulo;
  moduloPlural = modulo + 's';
  moduloCap = capitalize(modulo);
  moduloCapPlural = capitalize(modulo, 's');

  console.log('Copiando os arquivos...');
  var pathOrigem = path.join(__dirname, 'source');
  var pathDestino = pathOrigem.replace(path.join('scaffolding/source'),
    path.join('src/app/admin/' + modulo));
  //copia os arquivos para o projeto
  copydir.sync(pathOrigem, pathDestino);
  //renomeia os arquivos
  fs.renameSync(path.join(pathDestino, '/usuario-routing.module.ts'),
    path.join(pathDestino, modulo + '-routing.module.ts'));
  fs.renameSync(path.join(pathDestino, '/usuario.module.ts'),
    path.join(pathDestino, modulo + '.module.ts'));
  //create
  fs.renameSync(path.join(pathDestino, '/create/usuario-create.component.css'),
    path.join(pathDestino, '/create/' + modulo + '-create.component.css'));
  fs.renameSync(path.join(pathDestino, '/create/usuario-create.component.html'),
    path.join(pathDestino, '/create/' + modulo + '-create.component.html'));
  fs.renameSync(path.join(pathDestino, '/create/usuario-create.component.ts'),
    path.join(pathDestino, '/create/' + modulo + '-create.component.ts'));

  //delete
  fs.renameSync(path.join(pathDestino, '/delete/usuario-delete.component.css'),
    path.join(pathDestino, '/delete/' + modulo + '-delete.component.css'));
  fs.renameSync(path.join(pathDestino, '/delete/usuario-delete.component.html'),
    path.join(pathDestino, '/delete/' + modulo + '-delete.component.html'));
  fs.renameSync(path.join(pathDestino, '/delete/usuario-delete.component.ts'),
    path.join(pathDestino, '/delete/' + modulo + '-delete.component.ts'));

  //edit
  fs.renameSync(path.join(pathDestino, '/edit/usuario-edit.component.css'),
    path.join(pathDestino, '/edit/' + modulo + '-edit.component.css'));
  fs.renameSync(path.join(pathDestino, '/edit/usuario-edit.component.html'),
    path.join(pathDestino, '/edit/' + modulo + '-edit.component.html'));
  fs.renameSync(path.join(pathDestino, '/edit/usuario-edit.component.ts'),
    path.join(pathDestino, '/edit/' + modulo + '-edit.component.ts'));

  //list
  fs.renameSync(path.join(pathDestino, '/usuario.component.css'),
    path.join(pathDestino, '/' + modulo + '.component.css'));
  fs.renameSync(path.join(pathDestino, '/usuario.component.html'),
    path.join(pathDestino, '/' + modulo + '.component.html'));
  fs.renameSync(path.join(pathDestino, '/usuario.component.ts'),
    path.join(pathDestino, '/' + modulo + '.component.ts'));

  //view
  fs.renameSync(path.join(pathDestino, '/view/usuario-view.component.css'),
    path.join(pathDestino, '/view/' + modulo + '-view.component.css'));
  fs.renameSync(path.join(pathDestino, '/view/usuario-view.component.html'),
    path.join(pathDestino, '/view/' + modulo + '-view.component.html'));
  fs.renameSync(path.join(pathDestino, '/view/usuario-view.component.ts'),
    path.join(pathDestino, '/view/' + modulo + '-view.component.ts'));


  //replace
  var arqModificados = '';

  // #MODULO_CAP_PLURAL#
  var optModuloCapPlural = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts',
      pathDestino + '/**/*.html'
    ],
    from: /#MODULO_CAP_PLURAL#/g,
    to: moduloCapPlural
  };

  try {
    arqModificados = replace.sync(optModuloCapPlural);
  } catch (error) {
    console.error('Erro:', error);
  }

  // #MODULO_PLURAL#
  var optModuloPlural = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts',
      pathDestino + '/**/*.html'
    ],
    from: /#MODULO_PLURAL#/g,
    to: moduloPlural
  };

  try {
    arqModificados = replace.sync(optModuloPlural);
  } catch (error) {
    console.error('Erro:', error);
  }

  // #MODULO_CAP#
  var optModuloCap = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts',
      pathDestino + '/**/*.html'
    ],
    from: /#MODULO_CAP#/g,
    to: moduloCap
  };

  try {
    arqModificados = replace.sync(optModuloCap);
  } catch (error) {
    console.error('Erro:', error);
  }

  // #MODULO#
  var optModulo = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts',
      pathDestino + '/**/*.html'
    ],
    from: /#MODULO#/g,
    to: modulo
  };

  try {
    arqModificados = replace.sync(optModulo);
    //console.log('Arquivos modificados:', arqModificados.join(', '));
  } catch (error) {
    console.error('Erro:', error);
  }

  // /*#
  var optComentarioIni = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts'
    ],
    from: /\/\*#/g,
    to: ''
  };

  try {
    arqModificados = replace.sync(optComentarioIni);
    //console.log('Arquivos modificados:', arqModificados.join(', '));
  } catch (error) {
    console.error('Erro:', error);
  }

  // #*/
  var optComentarioFim = {
    allowEmptyPaths: true,
    files: [
      pathDestino + '/*.ts',
      pathDestino + '/**/*.ts'
    ],
    from: /#\*\//g,
    to: ''
  };

  try {
    arqModificados = replace.sync(optComentarioFim);
  } catch (error) {
    console.error('Erro:', error);
  }

  console.log('############################################################');
  console.log('## CRUD ' + modulo + ' criado com sucesso!!!');
  console.log('## Execute as operações abaixo para registrar o novo módulo na aplicação:');
  console.log('#');
  console.log('## Adicione as seguintes linhas no arquivo src/app/app-routing.module.ts');
  console.log('#   import { ' + moduloCap + 'Routes } from \'./' + modulo + '\';');
  console.log('#   ...' + moduloCap + 'Routes');
  console.log('#');
  console.log('## Importe o módulo no arquivo src/app/app.module.ts');
  console.log('#   import { ' + moduloCap + 'Module } from \'./' + modulo + '\';');
  console.log('#   ' + moduloCap + 'Module' + ' (em @NgModule({ imports: [] })');
  console.log('#');
  console.log('## Acesse o CRUD em: http://localhost:8080/' + moduloPlural);
  console.log('############################################################');
  console.log('');
});
// Fim prompt para obter o nome do módulo
