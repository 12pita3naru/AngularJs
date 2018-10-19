angular.module('tarefas', [])

    .controller('Lista', function () {

        var lista = this;

        lista.array = []
        lista.addLista = function () {

            lista.array.push({text: newTarefa, done: false});
            newTarefa = '';

        }

    })